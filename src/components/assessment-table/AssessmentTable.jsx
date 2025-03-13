import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const chapters = [
  { name: 'HTML', status: 'Completed', questions: 15, link: 'https://forms.gle/9hAV4qLF7BdScgD46' },
  { name: 'CSS', status: 'In Progress', questions: ' - ', link: '#' },
  { name: 'Tailwind', status: 'Not Published', questions: ' - ', link: '#' },
  { name: 'JavaScript', status: 'Not Published', questions: ' - ', link: '#' },
  { name: 'React', status: 'Not Published', questions: ' - ', link: '#' },
  { name: 'Node.js', status: 'Not Published', questions: ' - ', link: '#' },
  { name: 'Firebase', status: 'Not Published', questions: ' - ', link: '#' },
  { name: 'MongoDB', status: 'Not Published', questions: ' - ', link: '#' },
  { name: 'GraphQL', status: 'Not Published', questions: ' - ', link: '#' },
  { name: 'TypeScript', status: 'Not Published', questions: ' - ', link: '#' },
  { name: 'Next.js', status: 'Not Published', questions: ' - ', link: '#' },
  { name: 'Nest.js', status: 'Not Published', questions: ' - ', link: '#' },
];

const PublishStatusIcon = ({ status }) => {
    switch (status) {
      case 'Completed':
        return <FaCheckCircle className="text-green-500 text-xs md:text-sm" />;
      case 'In Progress':
        return <span className="text-yellow-500 text-xs md:text-sm">In Progress</span>;
      default:
        return <FaTimesCircle className="text-red-500 text-xs md:text-sm" />;
    }
  };
  
  const AssessmentTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-800 dark:border-gray-200 text-xs md:text-sm">
        <thead>
          <tr className="border border-gray-800 dark:border-gray-200">
            <th className="py-2 px-3 text-left">Chapter Name</th>
            <th className="py-2 px-3 text-left">No of Questions</th>
            <th className="py-2 px-3 text-left">Assessment Link</th>
            <th className="py-2 px-3 text-left">Publish Status</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map((chapter, index) => (
            <tr key={index} className="border-b border-gray-800 dark:border-gray-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <td className="py-2 px-3">{chapter.name}</td>
              <td className="py-2 px-3">{chapter.questions}</td>
              <td className="py-2 px-3">
                <a
                  href={chapter.status === 'Not Published' ? '#' : chapter.link} target="_blank"
                  className={`${
                    chapter.status === 'Not Published'
                      ? 'line-through text-gray-500'
                      : chapter.status === 'In Progress'
                      ? 'text-yellow-500'
                      : 'text-blue-500'
                  } hover:underline`}
                >
                  Take Assessment
                </a>
              </td>
              <td className="py-2 px-3">
                <PublishStatusIcon status={chapter.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default AssessmentTable;