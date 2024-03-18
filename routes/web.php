<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\TeacherCourseController;
use App\Http\Controllers\CourseObjectiveController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ExamProposalController;
use App\Http\Controllers\CLOController;
use App\Http\Controllers\WeeklyLessonPlanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $departments = \App\Models\Department::all();
    $proposals = \App\Models\ExamProposal::all();
    $committees = \App\Models\ExamCommittee::all();
    return Inertia::render('Dashboard',[
        'departments' => $departments,
        'proposals' => $proposals,
        'committees' => $committees,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/workspace', [CourseController::class, 'add'])->middleware(['auth', 'verified'])->name('workspace');

Route::middleware('auth')->group(function () {
    
    Route::get('/que', [QuestionController::class, 'questionPage'])->name('que');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //CRUD Course
    Route::get('/addCourse', [CourseController::class, 'add'])->name('course.add');
    Route::post('/storeCourse', [CourseController::class, 'store'])->name('course.store');

    Route::get('/edit/course/{id}', [CourseController::class, 'EditCourse'])->name('EditCourse');
    Route::post('/update/course/{id}', [CourseController::class, 'UpdateCourse'])->name('UpdateCourse');
    Route::delete('/delete/course/{id}', [CourseController::class, 'deleteCourse'])->name('deleteCourse');

    Route::get('/success', [CourseController::class, 'success'])->name('success');

    Route::get('/courseView/{courseCode}', [CourseController::class, 'courseView'])->name('courseView');

    //que
    Route::get('/que/{courseCode}', [QuestionController::class, 'getque'])->name('que');
    Route::post('/que/up/{courseCode}', [QuestionController::class, 'storeque'])->name('que.up');

    //CO
    Route::get('/set-syllabus/{courseCode}', [CourseObjectiveController::class, 'setSyllabus'])->name('courseObjectiveView');
    Route::post('/set-syllabus/co/{courseCode}', [CourseObjectiveController::class, 'storeCourseObjective'])->name('set-syllabus-route.co');

    Route::get('/edit/co/{co}', [CourseObjectiveController::class, 'EditCourseObjectiveView'])->name('EditCourseObjective');
    Route::post('/update/co/{co}', [CourseObjectiveController::class, 'UpdateCourseObjective'])->name('UpdateCourseObjective');
    Route::delete('/delete/co/{co}', [CourseObjectiveController::class, 'deleteCourseObjective'])->name('deleteCourseObjective');

    //CLO
    //EditCourseLearningOutcome
    Route::get('/clo/{courseCode}', [CLOController::class, 'CLOPage'])->name('CLOView');
    Route::post('/clo/upload/{courseCode}', [CLOController::class, 'storeCourseLearningOutcome'])->name('store.clo');

    Route::get('/edit/clo/{clo}', [CLOController::class, 'EditCLO'])->name('EditCLO');
    Route::post('/update/clo/{clo}', [CLOController::class, 'UpdateCLO'])->name('UpdateCLO');
    Route::delete('/delete/clo/{clo}', [CLOController::class, 'deleteCLO'])->name('deleteCLO');

    //editBasicInfo
    Route::get('/edit/basic/{courseCode}', [CourseController::class, 'editBasicInfo'])->name('editBasicInfo');
    Route::post('/edit/basic/up/{courseCode}', [CourseController::class, 'storeBasicInfo'])->name('storeBasicEdits');


    //proposal
    Route::get('/proposal', [ExamProposalController::class, 'proposalPage'])->name('proposalPage');
    Route::post('/proposal/up', [ExamProposalController::class, 'storeProposal'])->name('storeProposal');

    //course distribution
    Route::get('/distribute/course', [TeacherCourseController::class, 'CourseDistributionPage'])->name('courseDistribution.page');
    Route::post('/distribute/course/upload', [TeacherCourseController::class, 'storeCourseDistribution'])->name('courseDistribution.store');

    //questionModeration    
    Route::get('/moderation/que/view', [QuestionController::class, 'moderationView'])->name('questionModerationView'); //show proposals
    Route::get('/questionsForModeration/{p_id}', [QuestionController::class, 'queForModeration'])->name('queForModeration');
    Route::get('/moderate/que/{que_id}', [QuestionController::class, 'moderateQue'])->name('moderateQue');
    Route::post('/moderate/que/up/{que_id}', [QuestionController::class, 'uploadModeration'])->name('uploadModeration');
    Route::get('/moderationForm/download/{p_id}', [QuestionController::class, 'downloadModerationForm'])->name('downloadModerationForm');

    
    Route::get('/plo_vs_clo/{courseCode}', [CourseController::class, 'PLOvsCLOPage'])->name('PLOvsCLOView');
    Route::post('/plovsclo/upload/{courseCode}', [CourseController::class, 'storePLOvsCLO'])->name('store.plovsclo');

    Route::get('/coursecontent/{courseCode}', [CourseController::class, 'CourseContent'])->name('coursecontent');
    Route::post('/coursecontent/upload/{courseCode}', [CourseController::class, 'storeCourseContent'])->name('coursecontent.upload');

    Route::get('/referencebooks/{courseCode}', [CourseController::class, 'referencebooks'])->name('referencebooks');
    Route::post('/referencebooks/upload/{courseCode}', [CourseController::class, 'storereferencebooks'])->name('referencebooks.upload');

    Route::get('/weeklyPlan/{courseCode}', [WeeklyLessonPlanController::class, 'WeeklyLessonPlanPage'])->name('weeklyPlan');
    Route::post('/weeklyPlan/upload/{courseCode}', [WeeklyLessonPlanController::class, 'storeWeeklyLessonPlan'])->name('weeklyPlan.upload');


    Route::get('/set-syllabus/clo/{courseCode}', [CourseController::class, 'setSyllabus'])->name('set-syllabus-route.clo');

    Route::get('/download/{courseCode}', [CourseController::class, 'download'])->name('download');
    Route::get('/weeklyplan/download/{courseCode}', [WeeklyLessonPlanController::class, 'downloadWeeklyPlan'])->name('downloadWeeklyPlan');


});

require __DIR__.'/auth.php';
