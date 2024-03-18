import { Inertia } from '@inertiajs/inertia';
import { router } from '@inertiajs/react'
import TextInput from '@/Components/TextInput';
import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import NumberInput from '@/Components/NumberInput';
import TextArea from '@/Components/TextArea';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

export default function CourseContentForm({ message, auth }) {
    const { courseLearningOutcomes, courseCode, success, courseContents } = usePage().props;
    console.log(courseLearningOutcomes);
    const [content, setContent] = useState('');
    const [teachingStrategies, setTeachingStrategies] = useState([]);
    const [assessmentStrategies, setAssessmentStrategies] = useState([]);
    const [mappings, setMappings] = useState([]);


    const { data, setData, post, processing, errors, reset } = useForm({
        content: '',
        teaching_strategy: '',
        assessment_strategy: '',
        mapping: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            CourseCode: courseCode,
            content: content,
            teaching_strategy: teachingStrategies.join(', '),
            assessment_strategy: assessmentStrategies.join(', '),
            mapping: mappings.join(', ')
        };
        router.post(route('coursecontent.upload', { courseCode: courseCode }), formData);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Add OBE Syllabus</h2>}
        >

            <Head title="Workspace" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex justify-center">
                                <div>
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Mapping/ Alignment of Course Content & CLOs</h2>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            Add Mapping/ Alignment of Course Content, Teaching Strategy, Assessment Strategy & CLOs from here.
                                        </p>
                                    </header>
                                    <form onSubmit={handleSubmit} className="mt-6 space-y-6 max-w-xl">
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
                                            <InputLabel htmlFor="content" value="Content" />
                                            <TextArea
                                                id="content"
                                                value={content}
                                                className="mt-1 block w-full"
                                                onChange={(e) => setContent(e.target.value)}
                                                required
                                            />
                                            <InputError message={errors.content} className="mt-2" />
                                        </div>
                                        <div>
                                            <InputLabel value="Teaching Strategy" />
                                            <div className="mt-2 space-y-2">
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Lecture" onChange={(e) => e.target.checked ? setTeachingStrategies([...teachingStrategies, e.target.value]) : setTeachingStrategies(teachingStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Lecture</span>
                                                </label>
                                                <br />
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Demonstration" onChange={(e) => e.target.checked ? setTeachingStrategies([...teachingStrategies, e.target.value]) : setTeachingStrategies(teachingStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Demonstration</span>
                                                </label>
                                                <br />
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Demonstration" onChange={(e) => e.target.checked ? setTeachingStrategies([...teachingStrategies, e.target.value]) : setTeachingStrategies(teachingStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Discussion</span>
                                                </label>
                                                <br />
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Demonstration" onChange={(e) => e.target.checked ? setTeachingStrategies([...teachingStrategies, e.target.value]) : setTeachingStrategies(teachingStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Power point presentation</span>
                                                </label>
                                                <br />
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Demonstration" onChange={(e) => e.target.checked ? setTeachingStrategies([...teachingStrategies, e.target.value]) : setTeachingStrategies(teachingStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Others</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <InputLabel value="Assessment Strategy" />
                                            <div className="mt-2 space-y-2">
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="MCQ" onChange={(e) => e.target.checked ? setAssessmentStrategies([...assessmentStrategies, e.target.value]) : setAssessmentStrategies(assessmentStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">MCQ</span>
                                                </label>
                                                <br />
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Quiz" onChange={(e) => e.target.checked ? setAssessmentStrategies([...assessmentStrategies, e.target.value]) : setAssessmentStrategies(assessmentStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Quiz</span>
                                                </label>
                                                <br />
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Assignment" onChange={(e) => e.target.checked ? setAssessmentStrategies([...assessmentStrategies, e.target.value]) : setAssessmentStrategies(assessmentStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Assignment</span>
                                                </label>
                                                <br />
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Assignment" onChange={(e) => e.target.checked ? setAssessmentStrategies([...assessmentStrategies, e.target.value]) : setAssessmentStrategies(assessmentStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Presentation</span>
                                                </label>
                                                <br />
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Assignment" onChange={(e) => e.target.checked ? setAssessmentStrategies([...assessmentStrategies, e.target.value]) : setAssessmentStrategies(assessmentStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Final Examination</span>
                                                </label>
                                                <br />
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox" value="Demonstration" onChange={(e) => e.target.checked ? setTeachingStrategies([...teachingStrategies, e.target.value]) : setTeachingStrategies(teachingStrategies.filter(strategy => strategy !== e.target.value))} />
                                                    <span className="ml-2">Others</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <InputLabel value="Mapping with CLOs" />
                                            {courseLearningOutcomes.map((outcome) => (
                                                <div key={outcome.CLO_ID}  className="mt-2 space-y-2">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox"
                                                            value={outcome.CLO_ID}
                                                            onChange={(e) => e.target.checked ? setMappings([...mappings, e.target.value]) : setMappings(mappings.filter(strategy => strategy !== e.target.value))}
                                                        />
                                                        <span
                                                            className="ml-2"
                                                            data-tooltip-id={`tooltip-${outcome.CLO_ID}`} 
                                                            data-tooltip-content={outcome.CLO_Description}
                                                        >
                                                            {outcome.CLO_ID}
                                                        </span>
                                                        <Tooltip id={`tooltip-${outcome.CLO_ID}`}  effect="solid" place="top" />

                                                    </label>
                                                    <br />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-end mt-4">
                                            <PrimaryButton className="ms-4" type="submit">
                                                Add Course Content
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>


                                <div>
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Added Contents & Mappings</h2>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Added Mapping/ Alignment of Course Content, Teaching Strategy, Assessment Strategy & CLOs is here.
                                        </p>
                                    </header>
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 mt-5">
                                        <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">content</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">mapping</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                                            {courseContents && courseContents.length > 0 ? (
                                                courseContents.map((contents, index) => (
                                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white'}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">{contents.content}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400 w-1/4">{contents.mapping}</td>
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
        </AuthenticatedLayout>
    );
}
