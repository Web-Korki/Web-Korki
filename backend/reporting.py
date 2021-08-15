import io
import calendar
from copy import copy
from datetime import datetime
from django.http import HttpResponse
from django.http import JsonResponse

from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image
from reportlab.platypus import Table, TableStyle
from reportlab.lib.pagesizes import A4
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors

from backend.models import House, Lesson, Student
from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import permission_required

# call it like this ?year=2021&house_id=2&month=7
# TODO Add Polish signs

# PDF Params
width, height = A4
margin_x = 50
styles = getSampleStyleSheet()
PStyle = styles["Normal"]
PStyle.alignment = TA_CENTER


# login_required() does the following:
#     If the user isn’t logged in, redirect to settings.LOGIN_URL, passing the current absolute path in the query string. Example: /accounts/login/?next=/polls/3/.
#     If the user is logged in, execute the view normally. The view code is free to assume the user is logged in.
# If the raise_exception parameter is given, the decorator will raise PermissionDenied, prompting the 403 (HTTP Forbidden) view instead of redirecting to the login page.

@login_required
@permission_required('backend.reading_reports', raise_exception=True)
def generate_report(request):
    """
    Report is generated for whole month.
    There are 7 days intervals
    Is prepared for all months (including february 28 and 29)
    """

    # Params
    month = request.GET.get('month')
    year = request.GET.get('year')
    house_id = request.GET.get('house_id')

    error = False
    if not month or not year or not house_id:
        error = "please specify month, year and house id in request parameters"
    if not error:
        try:
            month = int(month)
            year = int(year)
            if month < 1 or month > 12:
                error = "Please pass correct month - int from 1 to 12"
            # More exceptions?
        except ValueError:
            error = "Month and year have to be integers"
    if error:
        response = JsonResponse({'error': error})
        return response

    # Models
    try:
        house = House.objects.get(id=house_id)
        students = Student.objects.filter(house=house)
    except House.DoesNotExist:
        error = "There is no house with that id!"
        return JsonResponse({'error': error})

    # Report constants
    month_name = get_month_name(month)
    last_day_of_month = calendar.monthrange(year, month)[1]
    start_date, end_date = datetime(year, month, 1), datetime(year, month, last_day_of_month) # Whole month

    house_name = house.name
    house_name_grammar = house_name.replace("Dom", "Domu")
    title = 'Miesieczne zestawienie ilosci korepetycji przeprowadzonych w ramach projektu spolecznego "WEB KORKI" w {}.'.format(
        house_name_grammar)
    date = "{} {} r.".format(month_name.upper(), year)
    weeks = calculate_week_headers(last_day_of_month)

    cols_n = len(weeks) + 3  # 8 or 7
    col_size = (width - 2 * margin_x) / cols_n

    # Data DO CALCULATIONS HERE
    data = generate_data(students, start_date, end_date, weeks, year, month, last_day_of_month)

    # Create Table
    headers = create_header(weeks)
    table_head = Table(headers, colWidths=col_size)
    add_table_head_styles(table_head, weeks, data)

    # Compose PDF
    document = []
    document = addTitle(document, title)
    document = addDate(document, date)
    document.append(table_head)

    # Add student tables
    data_non_empty = {k: v for k, v in data.items() if v}
    for i, student in enumerate(data_non_empty):
        last = i + 1 == len(data_non_empty)
        color = colors.white if i % 2 == 0 else colors.ghostwhite
        subjects_data = [[student] + data for data in data_non_empty[student]]
        add_student_table(document, subjects_data, col_size, color, last)

    # Add summary table
    add_summary_table(document, data_non_empty, weeks, col_size)

    # Add signature field
    document = addSignatureField(document)

    if len(data_non_empty) == 0:
        error = "There is not data for this set of parameters!"
        response = JsonResponse({'error': error})
        return response

    # Generate PDF
    buffer = io.BytesIO()
    SimpleDocTemplate(
        buffer,
        rightMargin=margin_x,
        leftMargin=margin_x,
        topMargin=12,
        bottomMargin=6,
        page=A4,
        title="Raport {} {}".format(date, house_name)
    ).build(document)

    # Send response
    response = HttpResponse(content_type='application/pdf')
    response.write(buffer.getvalue())
    # pdf_name = "Raport WEBKORKI {} {}".format(house_name, date)
    # response['Content-Disposition'] = 'attachment; filename=%s' % pdf_name # This will convert pdf to attachment
    buffer.seek(0)
    return response


# Helper functions

def get_month_name(idx):
    months = ["", "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień",
              "Październik", "Listopad", "Grudzień"]
    return months[idx]


def calculate_week_headers(last_day_of_month):
    if last_day_of_month > 29:
        last_week_head = "29-" + str(last_day_of_month)
    elif last_day_of_month == 29:
        last_week_head = "29"

    if last_day_of_month > 28:
        weeks = ['01-07', "08-14", "15-21", "22-28", last_week_head]
    else:
        weeks = ['01-07', "08-14", "15-21", "22-28"]  # For February 28

    return weeks


def create_header(weeks):
    headers_top_row = ['Imie', 'Przedmiot', 'Liczba godzin w tygodniu'] + [""] * (len(weeks) - 1) + ['Suma']
    headers_bottom_row = ["", ""] + weeks + [""]
    headers = [
        headers_top_row,
        headers_bottom_row,
    ]
    return headers


def add_table_head_styles(table_head, weeks, data):
    week_span_from = 2
    week_span_to = week_span_from + len(weeks) - 1
    header_styles = [
        # Header
        ('SPAN', (week_span_from, 0), (week_span_to, 0)),  # span for weeks
        ('SPAN', (0, 0), (0, 1)),
        ('SPAN', (1, 0), (1, 1)),
        ('SPAN', (-1, 0), (-1, 1)),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LINEBEFORE', (0, 0), (-1, -1), 1, colors.black),
        ('LINEAFTER', (-1, 0), (-1, -1), 1, colors.black),
        ('LINEABOVE', (0, 0), (-1, -1), 1, colors.black),
        ('BACKGROUND', (0, 0), (-1, -1), colors.whitesmoke)
    ]
    # Add bottom line if there's no data - not necessary anymore because pdf will not be generated
    if len(data) == 0:
        styles.append(('LINEBELOW', (0, -1), (-1, -1), 1, colors.black))
    table_head.setStyle(TableStyle(header_styles))


def generate_data(students, start_date, end_date, weeks, year, month, last_day_of_month):
    data = {}
    for i, student in enumerate(students):
        print(student)
        name = "{} {}".format(student.first_name, student.alias)
        data[name] = []
        # Lessons for each student for current month
        lessons = Lesson.objects.all().filter(student=student, datetime__range=(start_date, end_date))
        # print(lessons)
        # All subjects the student has taken part
        subjects = set([lesson.subject[0] for lesson in lessons]) # Get keys

        for subject in subjects:
            # Example row for July [math, 1, 2, 3, 4, 5, 15]
            subject_full_name = dict(lessons[0].subject.choices)[subject]
            row = [subject_full_name]
            # Iterate weeks
            start, end = 1, 7
            sum_for_row = 0

            for week in range(len(weeks)):
                week_start, week_end = datetime(year, month, start), datetime(year, month, end)
                lessons_in_week = 0
                canceled_cell = False

                # Lessons for student, subject and time range
                # WE ASSUME THAT THERE CAN BE ONLY ONE LESSON CANCELED IN ONE WEEK FOR ONE SUBJECT
                cur_lessons = lessons.filter(datetime__range=(week_start, week_end), subject__contains = subject)
                for l in cur_lessons:
                    if l.is_canceled:
                        if l.cancel_reason[0] == "cancel_house":
                            canceled_cell = "0 (P)"
                        else:
                            canceled_cell = "0 (W)"
                    else:
                        lessons_in_week += 1

                if lessons_in_week > 0:
                    row.append(lessons_in_week)
                    sum_for_row += lessons_in_week
                elif canceled_cell:
                    row.append(canceled_cell)
                else:
                    row.append(0)

                # Go to next week
                start += 7
                end += 7
                if end > last_day_of_month:
                    end = last_day_of_month
            # Add sum for whole month
            row.append(sum_for_row)
            data[name].append(row)
    return data


def add_student_table(document, data, col_size, color=colors.white, last=False):
    table_user = Table(data, colWidths=col_size)
    styles = [
        # Header
        ('SPAN', (0, 0), (0, -1)),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LINEBEFORE', (0, 0), (-1, -1), 1, colors.black),
        ('LINEAFTER', (-1, 0), (-1, -1), 1, colors.black),
        ('LINEABOVE', (0, 0), (-1, -1), 1, colors.black),
        ('BACKGROUND', (0, 0), (-1, -1), color)
    ]

    if last:
        styles.append(('LINEBELOW', (0, -1), (-1, -1), 1, colors.black))

    table_user.setStyle(TableStyle(styles))
    document.append(table_user)


def add_summary_table(document, data_non_empty, weeks, col_size):
    cols_n = len(weeks) + 3
    data = [[""]*(cols_n - 2)]
    sum_ = sum([item[-1] for elem in data_non_empty.values() for item in elem]) # Covert to 1d list and get sums
    data[0].append("SUMA")
    data[0].append(sum_)

    canceled_by_house = len([v for elem in data_non_empty.values() for item in elem for v in item[1:] if v == '0 (P)'])
    canceled_by_project = len([v for elem in data_non_empty.values() for item in elem for v in item[1:] if v == '0 (W)'])

    data2 = [
        ["Liczba lekcji odwolanych przez placowke"] + [""]*3 + [str(canceled_by_house)] + [""]*(cols_n - 5),
        ["Liczba lekcji odwolanych przez projekt"] + [""]*3 + [str(canceled_by_project)] + [""]*(cols_n - 5),
    ]



    summary_table = Table(data, colWidths=col_size)
    summary_table2 = Table(data2, colWidths=col_size)

    styles = [
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LINEBEFORE', (-2, 0), (-2, 0), 1, colors.black),
        ('LINEABOVE', (-2, 0), (-1, 0), 1, colors.black),
        ('LINEAFTER', (-2, 0), (-1, 0), 1, colors.black),
        ('LINEBELOW', (-2, 0), (-1, 0), 1, colors.black),
        ('BACKGROUND', (-2, 0), (-1, 0), colors.whitesmoke)
    ]

    styles2 = [
        ('SPAN', (0, 0), (3, 0)),
        ('SPAN', (0, 1), (3, 1)),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('ALIGN', (0, 0), (0, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (4, -1), 1, colors.black)
    ]

    summary_table.setStyle(TableStyle(styles))
    summary_table2.setStyle(TableStyle(styles2))

    document.append(summary_table)
    document.append(Spacer(1, 5))
    document.append(summary_table2)

# Table functions

def addTitle(doc, title):
    doc.append(Spacer(1, 20))
    # doc.append(Paragraph(title, ParagraphStyle(name="title", fontSize=12, leading=18, alignment=TA_CENTER)))
    doc.append(Paragraph(title, PStyle))
    doc.append(Spacer(1, 5))
    return doc


def addDate(doc, date):
    # doc.append(Spacer(1, 5))
    doc.append(Paragraph('''<b>{}</b>'''.format(date), PStyle))
    doc.append(Spacer(1, 5))
    return doc


def addSignatureField(doc):
    doc.append(Spacer(1, 30))
    styleRight = copy(PStyle)
    styleRight.alignment = TA_RIGHT
    doc.append(Paragraph("."*25, styleRight))
    doc.append(Paragraph("(Podpis i data)", styleRight))
    return doc
