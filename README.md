# OBE Fusion

## Introduction

OBE Fusion is a web application designed to facilitate the upload and management of Outcome Based Education (OBE) syllabi by teachers. Built with Laravel, ReactJS, and InertiaJS, OBE Fusion provides a seamless and user-friendly interface for teachers to manage their course syllabi efficiently.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Features

- Easy upload of OBE syllabi by teachers
- Secure authentication and authorization
- Real-time updates and notifications
- User-friendly interface with ReactJS and InertiaJS
- Efficient management of course information

## Requirements

- Laravel
- ReactJS
- InertiaJS
- Composer
- MySQL

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/obe-fusion.git
    cd obe-fusion
    ```

2. Install backend dependencies:
    ```bash
    composer install
    ```

3. Install frontend dependencies:
    ```bash
    npm install
    npm run dev
    ```

4. Set up environment variables:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

5. Configure the `.env` file with your database settings and other environment variables.

6. Run migrations and seed the database:
    ```bash
    php artisan migrate --seed
    ```

7. Start the development server:
    ```bash
    php artisan serve
    ```

## Usage

### Teacher Module

- **Login**: Teachers can log in securely to the platform.
- **Upload Syllabus**: Teachers can easily upload their course's OBE syllabus.
- **Manage Courses**: Teachers can view and update their course information.
- **Notifications**: Teachers receive real-time notifications for updates.

### Admin Module

- **User Management**: Admins can manage user roles and permissions.
- **Course Management**: Admins can oversee the courses and syllabi uploaded.
- **System Monitoring**: Admins can monitor the system's performance and usage.

## Technologies Used

- **Backend**: Laravel
- **Frontend**: ReactJS, InertiaJS
- **Database**: MySQL
- **Styling**: Tailwind CSS
- **Authentication**: Laravel Breeze

## Screenshots

### Dashboard
![image](https://github.com/Asif-Iqbal-HSTU/ToServer/assets/40653155/2fe911a3-bac4-4e25-a097-e0ae2eae6fcc)

### Specific Course Items
![image](https://github.com/Asif-Iqbal-HSTU/ToServer/assets/40653155/7588d9ff-ff13-45e3-9770-b947255a2b21)

### Weekly Lesson Plan Uploading
![image](https://github.com/Asif-Iqbal-HSTU/ToServer/assets/40653155/de120d70-bbc8-4bbf-9c13-9c8b908862da)

### Question Making
![image](https://github.com/Asif-Iqbal-HSTU/ToServer/assets/40653155/88a82c34-b23d-4d55-9d86-6b40ed1d3b3e)



## Contact

For any inquiries or feedback, please contact us at:
- Email: asif.iqbal.hstu@gmail.com

## Acknowledgements

- Thanks to the development team for their dedication and hard work.
- Special thanks to the educators who provided valuable feedback during the development process.
