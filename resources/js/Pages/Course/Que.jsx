import { useState, useEffect, useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import NumberInput from '@/Components/NumberInput';
import TextArea from '@/Components/TextArea';
import '@fortawesome/fontawesome-free/css/all.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import katex from 'katex';
import 'katex/dist/katex.min.css';
window.katex = katex;
import AbcBullet from './AbcBullet';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

export default function Questions({ message, auth }) {
    const { ques, courseCode, success, courseLearningOutcomes } = usePage().props;
    console.log(ques);

    const { data, setData, post, processing, errors, reset } = useForm({
        CourseCode: '',
        ExamYear: '',
        Regular_Short: '',
        Section: '',
        NO_123: '',
        NO_ABC: '',
        Question: '',
        ConnectedCLO: '',
        Bloom_Taxonomy: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('que.up', { courseCode: courseCode }));
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this course objective?')) {
            router.delete(route('deleteCourseObjective', { co: id }));
        }
    };



    // Quill modules configuration
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'list': 'bullet' }],
            ['link', 'image'],
            ['formula'],
        ],
    };
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
                                                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Course Objectives (CO)</h2>

                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                                    Add Course Objectives (COs) for {courseCode} from here.
                                                </p>

                                            </header>
                                            <form onSubmit={submit} className="mt-6 space-y-6">
                                                <div>
                                                    <InputLabel htmlFor="CourseCode" value="Course Code" />

                                                    <TextInput
                                                        id="CourseCode"
                                                        name="CourseCode"
                                                        value={courseCode}
                                                        className="mt-1 block w-full"
                                                        autoComplete="CourseCode"
                                                        onChange={(e) => setData('CourseCode', e.target.value)}
                                                        required
                                                        disabled
                                                    />

                                                    <InputError message={errors.CourseCode} className="mt-2" />
                                                </div>

                                                <div>
                                                    <InputLabel htmlFor="ExamYear" value="Exam Year" />

                                                    <TextInput
                                                        id="ExamYear"
                                                        name="ExamYear"
                                                        value={data.ExamYear}
                                                        className="mt-1 block w-full"
                                                        autoComplete="ExamYear"
                                                        isFocused={true}
                                                        onChange={(e) => setData('ExamYear', e.target.value)}
                                                        required
                                                    />

                                                    <InputError message={errors.ExamYear} className="mt-2" />
                                                </div>
                                                

                                                <div className="mt-4">
                                                    <InputLabel htmlFor="Regular_Short" value="Regular_Short" />

                                                    <select
                                                        id="Regular_Short"
                                                        name="Regular_Short"
                                                        value={data.Regular_Short}
                                                        className='mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm'
                                                        onChange={(e) => setData('Regular_Short', e.target.value)}
                                                        required
                                                    >
                                                        <option value="">Select Option</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Short">Short</option>
                                                    </select>

                                                    <InputError message={errors.Regular_Short} className="mt-2" />
                                                </div>

                                                <div className="mt-4">
                                                    <InputLabel htmlFor="Section" value="Section" />

                                                    <select
                                                        id="Section"
                                                        name="Section"
                                                        value={data.Section}
                                                        className='mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm'
                                                        onChange={(e) => setData('Section', e.target.value)}
                                                        required
                                                    >
                                                        <option value="">Select Option</option>
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                    </select>

                                                    <InputError message={errors.Regular_Short} className="mt-2" />
                                                </div>

                                                <div>
                                                    <InputLabel htmlFor="NO_123" value="NO_123" />

                                                    <TextInput
                                                        id="NO_123"
                                                        name="NO_123"
                                                        value={data.NO_123}
                                                        className="mt-1 block w-full"
                                                        autoComplete="NO_123"
                                                        onChange={(e) => setData('NO_123', e.target.value)}
                                                        required
                                                    />

                                                    <InputError message={errors.NO_123} className="mt-2" />
                                                </div>

                                                <div>
                                                    <InputLabel htmlFor="NO_ABC" value="NO_ABC" />

                                                    <TextInput
                                                        id="NO_ABC"
                                                        name="NO_ABC"
                                                        value={data.NO_ABC}
                                                        className="mt-1 block w-full"
                                                        autoComplete="NO_ABC"
                                                        onChange={(e) => setData('NO_ABC', e.target.value)}
                                                        required
                                                    />

                                                    <InputError message={errors.NO_ABC} className="mt-2" />
                                                </div>

                                                <div>
                                                    <InputLabel htmlFor="Question" value="Question" />
                                                    <ReactQuill
                                                        id="Question"
                                                        value={data.Question}
                                                        onChange={(content) => setData('Question', content)}
                                                        modules={modules}
                                                    />

                                                    <InputError message={errors.Question} className="mt-2" />
                                                </div>

                                                <div className="mt-4">
                                                    <InputLabel htmlFor="ConnectedCLO" value="ConnectedCLO" />

                                                    <select
                                                        id="ConnectedCLO"
                                                        name="ConnectedCLO"
                                                        value={data.ConnectedCLO}
                                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                                        onChange={(e) => setData('ConnectedCLO', e.target.value)}
                                                        required
                                                    >
                                                        <option value="">Select CLO</option>
                                                        {courseLearningOutcomes.map((courseLearningOutcome) => (
                                                            <option
                                                                key={courseLearningOutcome.CLO_ID}
                                                                value={courseLearningOutcome.CLO_ID}
                                                                className='mt-5'
                                                            >
                                                                {courseLearningOutcome.CLO_ID}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <InputError message={errors.ConnectedCLO} className="mt-2" />
                                                </div>

                                                <div className="mt-4">
                                                    <InputLabel htmlFor="Bloom_Taxonomy" value="Bloom_Taxonomy" />

                                                    <select
                                                        id="Bloom_Taxonomy"
                                                        name="Bloom_Taxonomy"
                                                        value={data.Bloom_Taxonomy}
                                                        className='mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm'
                                                        onChange={(e) => setData('Bloom_Taxonomy', e.target.value)}
                                                        required
                                                    >
                                                        <option value="">Select Option</option>
                                                        <option value="Remember">Remember</option>
                                                        <option value="Understand">Understand</option>
                                                        <option value="Apply">Apply</option>
                                                        <option value="Analyze">Analyze</option>
                                                        <option value="Evaluate">Evaluate</option>
                                                        <option value="Create">Create</option>
                                                    </select>

                                                    <InputError message={errors.Regular_Short} className="mt-2" />
                                                </div>

                                                <div className="flex items-center justify-end mt-4">
                                                    <PrimaryButton className="ms-4" disabled={processing}>
                                                        Create Question
                                                    </PrimaryButton>
                                                </div>
                                            </form>
                                        </div>
                                        <div>
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
                                                <thead>
                                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Section & No.</th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Question</th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Edit</th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                                                    {ques && ques.length > 0 ? (
                                                        ques.map((que, index) => (
                                                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white'}>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">Section-{que.Section}; {que.NO_123}. {que.NO_ABC}</td>
                                                                <td className="px-6 py-4 whitespace-wrap text-sm text-gray-900 dark:text-gray-400 break-all">
                                                                    <div dangerouslySetInnerHTML={{ __html: que.Question }} />
                                                                </td>
                                                                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                                    <Link href={route('EditCourseObjective', { co: que.id })}>
                                                                        <button className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600">
                                                                            Edit
                                                                        </button>
                                                                    </Link>
                                                                </td>

                                                                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">

                                                                    <button onClick={() => handleDelete(objective.id)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400" colSpan="2">No course objectives found.</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
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