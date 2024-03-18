<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Course;
use App\Models\TeacherCourse;
use App\Models\CourseObjective;
use App\Models\CourseLearningOutcome;

use Barryvdh\DomPDF\Facade\Pdf;

class WeeklyLessonPlanController extends Controller
{
    //
    public function WeeklyLessonPlanPage($courseCode): Response
    {
        //$departments = Department::all();
        //$faculties = Faculty::all();
        //$courseCode = \Illuminate\Support\Facades\Session::get('CourseCode');
        //dd($courseCode);
        $weeklyPlans = \App\Models\WeeklyLessonPlan::where('CourseCode', $courseCode)->get();
        $courseLearningOutcomes = \App\Models\CourseLearningOutcome::where('CourseCode', $courseCode)->get();
        return Inertia::render('Course/WeeklyLessonPlan',[
            'courseCode' => $courseCode,
            'courseLearningOutcomes' => $courseLearningOutcomes,
            'weeklyPlans' => $weeklyPlans,
        ]);
    }
    

    public function storeWeeklyLessonPlan(Request $request, $courseCode)
    {
        //dd($request);
        $validatedData = $request->validate([
            'CourseCode' => 'required|string',
            'Week' => 'required',
            'Topics' => 'required|string',
            'SpecificOutcomes' => 'required|string',
            'teaching_strategy' => 'nullable|string',
            'teaching_aid' => 'nullable|string',
            'assessment_strategy' => 'nullable|string',
            'mapping' => 'nullable|string',
        ]);
        //dd($validatedData);

        // Create a new course content instance
        $weeklyPlan = \App\Models\WeeklyLessonPlan::create([
            'CourseCode' => $validatedData['CourseCode'],
            'Week' => $validatedData['Week'],
            'Topics' => $validatedData['Topics'],
            'SpecificOutcomes' => $validatedData['SpecificOutcomes'],
            'teaching_strategy' => $validatedData['teaching_strategy'] ?? null,
            'teaching_aid' => $validatedData['teaching_aid'] ?? null,
            'assessment_strategy' => $validatedData['assessment_strategy'] ?? null,
            'mapping' => $validatedData['mapping'] ?? null,
        ]);

        //dd($weeklyPlan);

        //$success = "Course content created successfully.";
        //$courseContents = \App\Models\CourseContent::where('CourseCode', $courseCode)->get();
        
        $weeklyPlans = \App\Models\WeeklyLessonPlan::where('CourseCode', $courseCode)->get();
        //return redirect()->back()->with('success', 'Course content created successfully.');
        $courseLearningOutcomes = \App\Models\CourseLearningOutcome::where('CourseCode', $courseCode)->get();
        return Inertia::render('Course/WeeklyLessonPlan',[
            'courseCode' => $courseCode,
            'courseLearningOutcomes' => $courseLearningOutcomes,
            'weeklyPlans' => $weeklyPlans,
        ]);
    }

    public function downloadWeeklyPlan( $courseCode )
    {
        $course = \App\Models\Course::where('CourseCode', $courseCode)->first();
        $weeklyPlans = \App\Models\WeeklyLessonPlan::where('CourseCode', $courseCode)->get();
        //dd($course);
        $data = [
            'course' => $course, 
            'courseCode' => $courseCode,
            'weeklyPlans' => $weeklyPlans,
        ];
        //dd($data);
        $pdf = PDF::loadView('downloadWeeklyPlan', $data)->setPaper('a4', 'landscape');
        
        return $pdf->stream('WeeklyPlan.pdf');
        //return view('download') -> with(['title'=>$courseCode]);
    }
}
