from django_filters.rest_framework import DateFilter, FilterSet
from todoapp.models import ToDo


class ToDoFilter(FilterSet):
    min_date = DateFilter(field_name='created_at', lookup_expr='gte')
    max_date = DateFilter(field_name='created_at', lookup_expr='lte')

    class Meta:
        model = ToDo
        fields = ['project', ]
