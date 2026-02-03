# UniEase - Campus Management System

UniEase is a comprehensive Django-based campus management system designed to streamline university operations and enhance the student experience. It provides a unified platform for students, faculty, and administrators to manage academic, hostel, library, placement, and other campus-related activities.

## Features

### For Students
- **Dashboard** - Personalized dashboard with quick access to announcements, notifications, and upcoming events.
- **Academics** - Access notes, timetables, syllabus, exam schedules, and academic records.
- **Doubt Forum** - Ask questions and get answers from peers and faculty (with anonymous posting option).
- **Library Management** - Search books, borrow/return books, check availability, and view library seat status.
- **Lost & Found** - Report lost items or found items with image uploads.
- **Hostel Complaints** - Submit and track hostel-related complaints.
- **Mess Menu & Ratings** - View weekly mess menu and provide ratings/feedback.
- **Transport** - View bus routes and schedules with delay information.
- **Placements** - Browse job/internship opportunities and submit applications.
- **Learning Resources** - Access curated educational resources (videos, articles, courses).
- **Academic Vault** - Store and manage certificates and academic records.
- **Performance Insights** - View performance analytics and attendance trends.

### For Faculty & staff
- **Create Announcements** - Post announcements for specific audiences.
- **Upload Notes** - Share study materials and resources with students.
- **Manage Syllabus** - Track and update syllabus completion status.
- **Schedule Exams** - Create and manage exam schedules.
- **Post Placements** - Add job/internship opportunities for students.
- **Answer Doubts** - Respond to student queries in the doubt forum.

### For Administrators
- **Complete Admin Panel** - Full-featured Django admin interface with enhanced functionality.
- **User Management** - Manage users, profiles, and role assignments.
- **Content Management** - Manage announcements, timetables, bus routes, mess menus, etc.
- **Complaint Management** - Resolve hostel complaints with status tracking.
- **Library Management** - Manage books, borrowings, fines, and library seats.
- **Placement Management** - Oversee applications and candidate shortlisting.

## Technology Stack

- **Backend**: Django 4.x (Python)
- **Database**: MySQL (configured) / SQLite (compatible)
- **Frontend**: HTML, CSS, JavaScript with Django Templates
- **Authentication**: Django built-in authentication system
- **File Storage**: Django FileField/ImageField for media uploads

## Project Structure

```
UniEase/
├── campus/                 # Main Django app
│   ├── models.py          # Database models (23 models)
│   ├── views.py           # View functions and business logic
│   ├── admin.py           # Enhanced admin configuration
│   ├── urls.py            # URL routing
│   └── templates/         # HTML templates
├── media/                 # User-uploaded files
│   ├── profiles/         # Profile pictures
│   ├── notes/            # Course notes
│   ├── lost_found/       # Lost & found item images
│   ├── resumes/          # Placement application resumes
│   └── certificates/     # Academic certificates
├── scripts/              # Helper scripts
│   └── populate_sample_data.py # Sample data generation
├── uniease/             # Project settings & configuration
│   ├── settings.py       # Django configuration
│   ├── urls.py           # Root URL configuration
│   └── wsgi.py           # WSGI configuration
├── manage.py             # Django management script
└── README.md             # Project documentation
```

## Database Models

The system includes 23 comprehensive models:

**User Management**: `UserProfile`, `Notification`

**Academic**: `Note`, `Timetable`, `Syllabus`, `Exam`, `AcademicRecord`

**Communication**: `Announcement`, `Doubt`, `Answer`, `AnswerUpvote`

**Campus Life**: `LostItem`, `HostelComplaint`, `BusRoute`, `MessMenu`, `MessRating`

**Library**: `Book`, `BookBorrowing`, `LibrarySeat`

**Placements**: `Placement`, `PlacementApplication`

**Learning**: `LearningResource`, `Certificate`

## Installation & Setup

### Prerequisites
- Python 3.10 or higher
- MySQL Server (if using default configuration)
- pip (Python package manager)

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd UniEase
```

### Step 2: Install Dependencies
```bash
pip install django pillow pymysql
```

### Step 3: Configure Database
1. Create a MySQL database named `uniease_db`.
2. Update credentials in `uniease/settings.py` if necessary.
3. Apply migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 4: Populate Sample Data
To load a rich set of sample data (Users, Complaints, Books, etc.):
```bash
python scripts/populate_sample_data.py
```
*Note: This script creates an admin user with username `admin` and password `admin123`.*

### Step 5: Run Development Server
```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/` in your browser.

## Sample Credentials

| Role | Username | Password |
|------|----------|----------|
| Admin | admin | admin123 |
| Student | student1 | password123 |
| Faculty | faculty1 | password123 |
| Warden | warden | password123 |
| Mess Head | messhead | password123 |
| Librarian | librarian | password123 |
| Placement | placement | password123 |

## Admin Access

1. Navigate to `http://127.0.0.1:8000/admin/`
2. Access the enhanced admin panel with features including:
   - Search and filter capabilities across all models.
   - Bulk actions (resolved complaints, shortlist candidates, etc.).
   - Color-coded status badges for visual clarity.
   - Permission-based access control.

## Usage Guide

### For Students
1. **Login**: Click **"Student Login"** on the home page.
2. **Dashboard**: View announcements, notifications, and quick links.
3. **Academic Management**: Download notes, view timetables, check exam schedules.
4. **Library**: Search/borrow books and track due dates.
5. **Campus Life**: File complaints, report lost items, check mess menu.

### For Faculty & Staff
1. **Login**: Click **"Staff Login"** on the home page.
2. **Create Content**: Post announcements, upload notes, schedule exams.
3. **Manage Syllabus**: Track course completion status.
4. **Engage Students**: Answer doubts in the forum.

## Configuration

### Media & Static Files
Configured in `uniease/settings.py`:
- `MEDIA_ROOT`: For student resumes, certificates, and notes.
- `STATIC_ROOT`: For production static assets.

## Production Deployment

1. Switch `DEBUG = False` in `settings.py`.
2. Configure `ALLOWED_HOSTS`.
3. Collect static files: `python manage.py collectstatic`.
4. Use a Gunicorn/uWSGI server for deployment.

## Future Enhancements
- Real-time notifications (WebSockets).
- QR-based attendance tracking.
- Integrated payment gateway.
- Mobile application (React Native).

## License
Licensed under the MIT License.

---
**Version**: 1.0.0 | **Updated**: Feb 2026
