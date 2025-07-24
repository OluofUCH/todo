
 const fetchTaskData = () => {
  try {
    const todoData: TaskData[] = JSON.parse(localStorage.getItem('todoData') || '[]');
    const ongoingData: TaskData[] = JSON.parse(localStorage.getItem('ongoingData') || '[]');
    const doneData: TaskData[] = JSON.parse(localStorage.getItem('doneData') || '[]');

    return {
      todoData,
      ongoingData,
      doneData
    };
  } catch (error) {
    console.error('Error fetching task data from localStorage:', error);
    return {
      todoData: [],
      ongoingData: [],
      doneData: []
    };
  }
};
export default fetchTaskData;

interface TaskData {
  title: string
  description: string
  category: string
  owner: string[]
  columnId: string
  id: string
}