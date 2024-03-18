import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import NumberInput from '@/Components/NumberInput';
import TextArea from '@/Components/TextArea';

export default function ReferenceBook({ message, auth }) {
    const { referencebooks, courseCode } = usePage().props;
    console.log(referencebooks);

    const { data, setData, post, processing, errors, reset } = useForm({
        CourseCode: '',
        Sl_No: '',
        BookName: '',
        Author: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('referencebooks.upload', { courseCode: courseCode }));
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
                                                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Reference Books</h2>

                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                                    Add reference books of {courseCode} from here.
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
                                                    <InputLabel htmlFor="Sl_No" value="Sl_No" />

                                                    <NumberInput
                                                        id="Sl_No"
                                                        name="Sl_No"
                                                        value={data.Sl_No}
                                                        className="mt-1 block w-full"
                                                        autoComplete="Sl_No"
                                                        isFocused={true}
                                                        onChange={(e) => setData('Sl_No', e.target.value)}
                                                        required
                                                        placeholder="Example: 1"
                                                    />

                                                    <InputError message={errors.Sl_No} className="mt-2" />
                                                </div>

                                                <div>
                                                    <InputLabel htmlFor="BookName" value="BookName" />

                                                    <TextInput
                                                        id="BookName"
                                                        name="BookName"
                                                        value={data.BookName}
                                                        className="mt-1 block w-full"
                                                        autoComplete="BookName"
                                                        isFocused={true}
                                                        onChange={(e) => setData('BookName', e.target.value)}
                                                        required
                                                    />

                                                    <InputError message={errors.BookName} className="mt-2" />
                                                </div>

                                                <div>
                                                    <InputLabel htmlFor="Author" value="Author" />

                                                    <TextInput
                                                        id="Author"
                                                        name="Author"
                                                        value={data.Author}
                                                        className="mt-1 block w-full"
                                                        autoComplete="Author"
                                                        isFocused={true}
                                                        onChange={(e) => setData('Author', e.target.value)}
                                                        required
                                                    />

                                                    <InputError message={errors.Author} className="mt-2" />
                                                </div>

                                                <div className="flex items-center justify-end mt-4">
                                                    <PrimaryButton className="ms-4" disabled={processing}>
                                                        Add Reference Book
                                                    </PrimaryButton>
                                                </div>
                                            </form>
                                        </div>
                                        <div>
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead>
                                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">BookName</th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Author</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                                                    {referencebooks && referencebooks.length > 0 ? (
                                                        referencebooks.map((book, index) => (
                                                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white'}>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">{book.BookName}</td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">{book.Author}</td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400" colSpan="2">No course learning outcome found.</td>
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