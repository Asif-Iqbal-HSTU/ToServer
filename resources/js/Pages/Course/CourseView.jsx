import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import NumberInput from '@/Components/NumberInput';
import TextArea from '@/Components/TextArea';

export default function CourseView({ message, auth }) {
    const { courseCode, courseTitle } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Add OBE Syllabus</h2>}
        >
            <Head title="Workspace" />
            {auth.user.role === "admin" ? (
                <>

                </>
            ) : (
                <>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900 dark:text-gray-100">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex justify-center">

                                        <div>
                                            <header>
                                                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">{courseCode}</h2>

                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                                    {courseTitle}
                                                </p>
                                            </header>
                                            <ul className="mt-4 divide-y divide-gray-200 dark:divide-gray-700">
                                                <li className="py-3 flex items-center justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        <Link href={route('editBasicInfo', { courseCode: courseCode })}>
                                                            <button className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600">Edit Basic Info</button>
                                                        </Link>
                                                    </span>
                                                </li>
                                                <li className="py-3 flex items-center justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        <Link href={route('courseObjectiveView', { courseCode: courseCode })}>
                                                            <button className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600">Course Objectives (CO)</button>
                                                        </Link>
                                                    </span>
                                                </li>
                                                <li className="py-3 flex items-center justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        <Link href={route('CLOView', { courseCode: courseCode })}>
                                                            <button className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600">Course Learning Outcome (CLO)</button>
                                                        </Link>
                                                    </span>
                                                </li>
                                                <li className="py-3 flex items-center justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        <Link href={route('PLOvsCLOView', { courseCode: courseCode })}>
                                                            <button className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600">Mapping/ Alignment PLO vs CLO</button>
                                                        </Link>
                                                    </span>
                                                </li>
                                                <li className="py-3 flex items-center justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        <Link href={route('coursecontent', { courseCode: courseCode })}>
                                                            <button className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600">Mapping/ Alignment of Course Content</button>
                                                        </Link>
                                                    </span>
                                                </li>
                                                <li className="py-3 flex items-center justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        <Link href={route('referencebooks', { courseCode: courseCode })}>
                                                            <button className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600">Reference Books</button>
                                                        </Link>
                                                    </span>
                                                </li>
                                                <li className="py-3 flex items-center justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        <Link href={route('weeklyPlan', { courseCode: courseCode })}>
                                                            <button className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600">Weekly Lesson Plan</button>
                                                        </Link>
                                                    </span>
                                                </li>
                                                <li className="py-3 flex items-center justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        <Link href={route('que', { courseCode: courseCode })}>
                                                            <button className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600">Create Question</button>
                                                        </Link>
                                                    </span>
                                                </li>
                                                <li className="py-3 flex items-center justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        <a href={route('download', { courseCode: courseCode })} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Full Syllabus Download</a>
                                                        &nbsp;
                                                        <a href={route('downloadWeeklyPlan', { courseCode: courseCode })} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Weekly Plan</a>
                                                    </span>
                                                </li>
                                            </ul>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </AuthenticatedLayout >
    );
}