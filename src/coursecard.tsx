interface Course {
  image: string;
  title: string;
  subject: string;
  grade: string | number;
  units?: number;
  lessons?: number;
  topics?: number;
  teacher?: string;
  students?: number;
  startDate?: string;
  endDate?: string;
  starred?: boolean;
  icons?: {
    preview?: boolean;
    calendar?: boolean;
    clone?: boolean;
    report?: boolean;
  };
}

export function createCourseCard(course: Course): HTMLElement {
  const card = document.createElement('div');
  card.className = 'course-card';

  const getIconHTML = (icon: string, title: string, active = true): string => {
    const opacity = active ? '1' : '0.4';
    const iconClass = title === 'Calendar' || title === 'Clone' ? 'big-icon' : '';
    return `<img src="../assets/icons/${icon}.svg" alt="${title}" title="${title}" style="opacity: ${opacity}" class="${iconClass}">`;
  };

  card.innerHTML = `
    <div class="card-header">
      <img src="${course.image}" alt="${course.title}" class="side-img">
      <div class="card-top-content">
        <div class="course-title">${course.title}</div>
        <div class="course-meta">${course.subject} | Grade ${course.grade}</div>
        <div class="course-meta">${course.units || 0} Units &nbsp; ${course.lessons || 0} Lessons &nbsp; ${course.topics || 0} Topics</div>
        <div class="course-meta">
          ${course.teacher ? `<select><option>${course.teacher}</option></select>` : '<select><option>No Classes</option></select>'}
        </div>
        <div class="course-meta">${course.students ? `${course.students} Students` : ''}</div>
        <div class="course-meta">${course.startDate && course.endDate ? `${course.startDate} - ${course.endDate}` : ''}</div>
      </div>
      <img class="star-icon" src="${course.starred ? '../assets/icons/favourite.svg' : '../assets/icons/fav-off.svg'}" alt="Star">
    </div>

    <div class="course-actions">
      ${getIconHTML('preview', 'View', course.icons?.preview)}
      ${getIconHTML('manage course', 'Calendar', course.icons?.calendar)}
      ${getIconHTML('grade submissions', 'Clone', course.icons?.clone)}
      ${getIconHTML('reports', 'Report', course.icons?.report)}
    </div>
  `;

  return card;
}
