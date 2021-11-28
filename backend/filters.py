from django_filters import rest_framework as filters
from .models import Substitution


class SubstitutionFilter(filters.FilterSet):
    datetime_range = filters.DateTimeFromToRangeFilter(
        field_name="datetime", lookup_expr="date_range"
    )

    class Meta:
        model = Substitution
        fields = [
            "new_teacher",
            "old_teacher",
            "datetime",
            "datetime_range",
            "subject",
            "new_teacher_found",
        ]
