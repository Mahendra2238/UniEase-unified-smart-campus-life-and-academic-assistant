# UniEase - Quick Start Guide

Get UniEase up and running in minutes!

## Prerequisites

Before you begin, ensure you have:
- Python 3.10+ installed
### 2. Database

UniiEase comes pre-configured with SQLite for development, so no extra database setup is required!


### 3. Automated Setup & Data Population (Recommended)

We have provided scripts to make setup instantaneous and populate realistic sample data.

**Step A: Apply Migrations**
```bash
python manage.py makemigrations
python manage.py migrate
```

**Step B: Populate Sample Data**
*Creates students, faculty, warden, mess head, librarian, placement officer, exams, books, complaints, etc.*
```bash
python scripts/populate_sample_data.py
```

### 4. Start the Server

```bash
python manage.py runserver
```

### 5. Access UniEase

Open your browser and navigate to:
- **Main Application**: http://127.0.0.1:8000/
  - Click **"Student Login"** for students.
  - Click **"Staff Login"** for faculty and staff.
- **Admin Panel**: http://127.0.0.1:8000/admin/

## Sample Login Credentials

All passwords are: `pass123` (except admin: `admin123`)

  Student:         student1 / password123
  Faculty:         faculty1 / password123
  Warden:          warden / password123
  Mess Head:       messhead / password123
  Librarian:       librarian / password123
  Placement:       placement / password123
============================================================
## Features by Role

### 🎓 Student
- **Dashboard**: View exams, borrowed books, status of complaints.
- **Academics**: Announcements, Notes, Timetable, Syllabus, Exams, Doubts.
- **Campus Life**: Lost & Found, Hostel Complaints, Transport, Mess Menu.
- **Library**: Search books, view seat availability.
- **Placements**: View and apply for jobs.

### 👨‍🏫 Faculty
- **Dashboard**: View daily schedule, pending syllabus.
- **Academics**: Upload notes, create exams, answer doubts.
- **Placements**: Post new opportunities.

### 🏠 Warden
- **Dashboard**: Track hostel complaints (Water, Electrical, etc.).
- **Complaints**: Resolve issues, update status.

### 🍛 Mess Head
- **Dashboard**: Track mess/food complaints, average ratings.
- **Mess**: Update daily menu.
- **Complaints**: Prioritize and resolve food-related issues.

### 📚 Librarian
- **Dashboard**: Track overdue books, daily stats.
- **Library**: Manage book inventory and seat occupancy.

### 💼 Placement Officer
- **Dashboard**: View recent applications, active drives.
- **Placements**: Manage company listings and student applications.

## Troubleshooting

### Database Connection Error
- Ensure MySQL is running.
- Check credentials in `uniease/settings.py`.
- Run: `python reset_database.py` (Warning: Deletes all data)

### "Table doesn't exist" Error
- Run: `python manage.py migrate`

### Static Files Not Loading
- Run: `python manage.py collectstatic`

### Port Already in Use
- Run: `python manage.py runserver 8080`

## Production Deployment

1. Set `DEBUG = False` in `settings.py`.
2. Update `ALLOWED_HOSTS`.
3. Use environment variables for secrets.
4. Configure Nginx + Gunicorn.
5. Set up SSL.

Enjoy using UniEase! 🎓
