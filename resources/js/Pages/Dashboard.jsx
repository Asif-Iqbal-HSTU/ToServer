import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import ExtraButton from '@/Components/PrimaryButton';

export default function Dashboard({ auth }) {
    
    const { departments, committees, proposals } = usePage().props;
    console.log(departments);
    let isChairman = false;
    let inCommittee = false;
    let detectedProposal;

    // Check if the user is a chairman
    departments.forEach(department => {
        if (department.chairman == auth.user.id) {
            isChairman = true;
        }
    });

    committees.forEach(committee => {
        if (committee.Chairman == auth.user.email || committee.Member1 == auth.user.email || committee.Member2 == auth.user.email) {
            inCommittee = true;
            proposals.forEach(proposal => {
                if (proposal.committee == committee.id) {
                    detectedProposal = proposal;
                }
            });
        }
    });
    console.log(isChairman);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {auth.user.role === "admin" ? (
                <>
                    <div className="max-w-7xl mx-auto p-6 lg:p-8">
                        <div className="mt-16">
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8 flex justify-center">
                                <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                    <div>
                                        <div className="h-14 w-14 bg-green-800/20 dark:bg-white-1200/100 flex items-center justify-center rounded-full">
                                            <img src="./images/digital.svg" alt="Description of the image" />
                                        </div>

                                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                            Welcome Admin!
                                        </h2>

                                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                            You can add a user of the system from here.
                                        </p>
                                        <div className="flex items-center gap-4 mt-4">

                                            {auth.user ? (
                                                <Link
                                                    href={route('workspace')}>
                                                    <PrimaryButton>
                                                        Add User
                                                    </PrimaryButton>
                                                </Link>
                                            ) : (
                                                <>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {isChairman ? (
                        <>
                            <div className="max-w-7xl mx-auto p-6 lg:p-8">
                                <div className="mt-16">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex justify-center">
                                        <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                            <div>
                                                <div className="h-14 w-14 bg-green-800/20 dark:bg-white-1200/100 flex items-center justify-center rounded-full">
                                                    <img src="./images/addCourse.png" alt="Description of the image" />
                                                </div>

                                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                                    Add courses
                                                </h2>

                                                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                                    Add a course easily from here that you can distribute to teachers further.
                                                </p>
                                                <div className="flex items-center gap-4 mt-4">
                                                    <Link
                                                        href={route('workspace')}>
                                                        <PrimaryButton>
                                                            Add Course
                                                        </PrimaryButton>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                            <div>
                                                <div className="h-14 w-14 bg-green-800/20 dark:bg-white-1200/100 flex items-center justify-center rounded-full">
                                                    <img src="./images/management.png" alt="Description of the image" />
                                                </div>

                                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                                    Distribute a Course
                                                </h2>

                                                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                                    Distribute the courses you've added to the teachers of your department.
                                                </p>
                                                <div className="flex items-center gap-4 mt-4">
                                                    <Link
                                                        href={route('courseDistribution.page')}>
                                                        <PrimaryButton>
                                                            Distribute Course
                                                        </PrimaryButton>
                                                    </Link>
                                                </div>
                                                {
                                                    /*
                                                    <div className="flex items-center gap-4 mt-4">
                                                    <a href={ route('que', { courseCode: 'courseCode' }) } className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">que</a>
                                                        &nbsp;
                        </div>
                        */
                                                }
                                            </div>
                                        </div>
                                        <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                            <div>
                                                <div className="h-14 w-14 bg-green-800/20 dark:bg-white-1200/100 flex items-center justify-center rounded-full">
                                                    <img src="./images/committee.png" alt="Description of the image" />
                                                </div>

                                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                                    Exam Committee and Proposal
                                                </h2>

                                                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                                    Assign teachers to the exam committee of a course to integrate it to the exam proposal.
                                                </p>
                                                <div className="flex items-center gap-4 mt-4">
                                                    <Link
                                                        href={route('proposalPage')}>
                                                        <PrimaryButton>
                                                            Set Committee
                                                        </PrimaryButton>
                                                    </Link>
                                                </div>
                                                {
                                                    /*
                                                    <div className="flex items-center gap-4 mt-4">
                                                    <a href={ route('que', { courseCode: 'courseCode' }) } className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">que</a>
                                                        &nbsp;
                        </div>
                        */
                                                }
                                            </div>
                                        </div>
                                        {inCommittee ? (
                                            <>
                                                <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                                    <div>
                                                        <div className="h-14 w-14 bg-green-800/20 dark:bg-white-1200/100 flex items-center justify-center rounded-full">
                                                            <img src="./images/writing.png" alt="Description of the image" />
                                                        </div>

                                                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                                            Moderate Questions
                                                        </h2>

                                                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                                            As a member of exam committee you can moderate questions.
                                                        </p>
                                                        <div className="flex items-center gap-4 mt-4">
                                                            <Link
                                                                href={route('questionModerationView')}>
                                                                <PrimaryButton>
                                                                    Question Moderation
                                                                </PrimaryButton>
                                                            </Link>
                                                        </div>
                                                        {
                                                            /*
                                                            <div className="flex items-center gap-4 mt-4">
                                                            <a href={ route('que', { courseCode: 'courseCode' }) } className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">que</a>
                                                                &nbsp;
                                </div>
                                */
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>

                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="max-w-7xl mx-auto p-6 lg:p-8">
                                <div className="mt-16">
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8 flex justify-center">
                                        <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                            <div>
                                                <div className="h-14 w-14 bg-green-800/20 dark:bg-white-1200/100 flex items-center justify-center rounded-full">
                                                    <img src="./images/digital.svg" alt="Description of the image" />
                                                </div>

                                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                                    Welcome Teacher!
                                                </h2>

                                                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                                    Welcome to HSTU's Automation System! Streamlining processes, enhancing communication, and simplifying your university experience. Explore, engage, and enjoy your journey with us!
                                                </p>
                                                <div className="flex items-center gap-4 mt-4">

                                                    {auth.user ? (
                                                        <Link
                                                            href={route('workspace')}>
                                                            <PrimaryButton>
                                                                Workspace
                                                            </PrimaryButton>
                                                        </Link>
                                                    ) : (
                                                        <>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {inCommittee ? (
                                                <>
                                                    <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                                        <div>
                                                            <div className="h-14 w-14 bg-green-800/20 dark:bg-white-1200/100 flex items-center justify-center rounded-full">
                                                                <img src="./images/digital.svg" alt="Description of the image" />
                                                            </div>

                                                            <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                                                Moderate Questions
                                                            </h2>

                                                            <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                                                As a member of exam committee you can moderate questions.
                                                            </p>
                                                            <div className="flex items-center gap-4 mt-4">
                                                                <Link
                                                                    href={route('questionModerationView')}>
                                                                    <PrimaryButton>
                                                                        Question Moderation
                                                                    </PrimaryButton>
                                                                </Link>
                                                            </div>
                                                            {
                                                                /*
                                                                <div className="flex items-center gap-4 mt-4">
                                                                <a href={ route('que', { courseCode: 'courseCode' }) } className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">que</a>
                                                                    &nbsp;
                                    </div>
                                    */
                                                            }
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>

                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                </>
            )}


        </AuthenticatedLayout>
    );
}
