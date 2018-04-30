from django.contrib.auth.models import User
from rest_framework import serializers
from trips.models import *

class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Diary
        fields = ('id','contents','writer','date','tripId')
       
class UserSerializer(serializers.ModelSerializer):
    spent       = serializers.PrimaryKeyRelatedField(many=True,queryset=Expense.objects.all())
    my_diary    = serializers.PrimaryKeyRelatedField(many=True,queryset=Diary.objects.all())
    class Meta:
        model = User
        fields = ('id','username','password','spent','my_diary')
    def create(self,validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
class TripSerializer(serializers.ModelSerializer):
    trip_budget     = serializers.PrimaryKeyRelatedField(many=True,queryset=Budget.objects.all())
    trip_expense    = serializers.PrimaryKeyRelatedField(many=True,queryset=Expense.objects.all())
    trip_photo      = serializers.PrimaryKeyRelatedField(many=True,queryset=Photo.objects.all())
    trip_diary      = serializers.PrimaryKeyRelatedField(many=True,queryset=Diary.objects.all())
    trip_todo       = serializers.PrimaryKeyRelatedField(many=True,queryset=Todo.objects.all())
    trip_rule       = serializers.PrimaryKeyRelatedField(many=True,queryset=Rule.objects.all())
    trip_schedule   = serializers.PrimaryKeyRelatedField(many=True,queryset=Schedule.objects.all())
    trip_marker     = serializers.PrimaryKeyRelatedField(many=True,queryset=Marker.objects.all())
    users   = UserSerializer(read_only=True,many=True)
    class Meta:
        model = Trip
        fields = ('id','title','sinceWhen','tilWhen','users','trip_budget','trip_expense','trip_photo','trip_diary','trip_todo','trip_rule','trip_schedule','trip_marker')

class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = ('id','contents','money','tripId')

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ('id','date','contents','money','spender','tripId')
 
class PhotoSerializer(serializers.ModelSerializer):
    diaries = DiarySerializer(read_only=True,many=True)
    class Meta:
        model = Photo
        fields = ('id','date','contents','folder','image','tripId','diaries')

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id','contents','tripId')

class RuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rule
        fields = ('id','contents','tripId')

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ('id','sinceWhen','tilWhen','contents','tripId')

class MarkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marker
        fields = ('id','place','tripId')

