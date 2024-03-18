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

class TeacherCourseController extends Controller
{
    //
    public function CourseDistributionPage(): Response {
        // Use $courseCode to perform actions, such as fetching data from the database or any other processing
        // Return a response or render a view as needed
        //dd($courseCode);
        $user = \App\Models\User::find(session()->get('user'))->first();
        $user_email = $user->email;
        $user_role = $user->role;
        $user_dept = $user->department;
        $dept = \App\Models\Department::where('name', $user_dept)->first();
        $dept_code = $dept->code;
        //dd($dept_code);
        $courses = \App\Models\Course::all();
        
        $teachers = \App\Models\User::where('role', $user_role)->where('department', $user_dept)->get();
        
        $teacherCourses = \App\Models\TeacherCourse::where('email', $user_email)->get();
        $teacherCoursesChairman = \App\Models\TeacherCourse::whereRaw('LEFT(CourseCode, 3) = ?', [$dept_code])->get();
        return Inertia::render('Course/DistributeCourses',[
            'courses' => $courses,
            'teachers' => $teachers,            
            'teacherCourses' => $teacherCourses,  
            'teacherCoursesChairman' => $teacherCoursesChairman,
        ]);
    }

    public function storeCourseDistribution(Request $request)
    {               
        $teacherCourses = \App\Models\TeacherCourse::where('CourseCode', $request->CourseCode)->first(); 

        if($teacherCourses){
            $teacherCourses->CourseCode = $request->CourseCode;
            $teacherCourses->email = $request->email;
            $teacherCourses->save();
        }
        else{
            $courseUser = \App\Models\TeacherCourse::create([
                'CourseCode' => $request->CourseCode,
                'email' => $request->email,
            ]);
        }

        
        //$course = \App\Models\Course::where('CourseCode', $request->CourseCode)->first();
        //$course->Instructor = $request->email;
        //$course->save();
        return back();
    }
}
