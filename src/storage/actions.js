import AsyncStorage from '@react-native-async-storage/async-storage';

const initialList = [
    {
        id: Math.floor(Math.random() * 1000 + 1000),
        title: 'Meeting with Client',
        description: "Schedule a meeting with the client to discuss project details, including the scope, objectives, and milestones. Review the project requirements, provide updates on the current status, and address any questions or concerns the client may have. It's essential to ensure clear communication and collaboration for a successful project outcome.",
        status: 'Urgent',
    },
    {
        id: Math.floor(Math.random() * 1000 + 1000),
        title: 'Gym Workout',
        description: "Plan a comprehensive workout session at the gym. Start with a 10-minute warm-up on the treadmill, followed by 30 minutes of cardio exercises to get your heart rate up. Then, move on to strength training, targeting major muscle groups. Afterward, cool down with 15 minutes of stretching exercises to improve flexibility. Maintain a consistent workout routine to build muscle, burn calories, and promote a healthy lifestyle.",
        status: 'Medium',
    },
    {
        id: Math.floor(Math.random() * 1000 + 1000),
        title: 'Grocery Shopping',
        description: "Create a shopping list of essential groceries and household items, taking into account your family's needs for the week.Visit the local supermarket, carefully selecting fresh produce, pantry staples, cleaning supplies, and personal care items.Check for any discounts and offers to save on expenses while ensuring your home is well- stocked with necessities.",
        status: 'Low',
    },
    {
        id: Math.floor(Math.random() * 1000 + 1000),
        title: 'Family Picnic',
        description: "Plan a memorable family picnic at the nearby park. Pack a picnic basket with a variety of sandwiches, snacks, and refreshing drinks. Bring along outdoor games like frisbee, soccer, and badminton to keep everyone entertained. Lay out a comfortable picnic blanket, relax in the shade of a tree, and enjoy quality time with your loved ones. Don't forget to capture beautiful moments with your camera to create lasting memories.",
        status: 'Urgent',
    },
    {
        id: Math.floor(Math.random() * 1000 + 1000),
        title: 'Reading a Book',
        description: "Escape into the world of literature by picking up a captivating novel or non-fiction book. Find a cozy spot with good lighting, grab your favorite book, and immerse yourself in its storyline. As you read, let the words transport you to different worlds, engage your imagination, and expand your knowledge. Reading is not just a leisure activity; it's a journey of the mind.",
        status: 'Medium',
    },
    {
        id: Math.floor(Math.random() * 1000 + 1000),
        title: 'Movie Night',
        description: "Relax in the evening and enjoy a movie night at home. Pick a movie from your collection or explore the latest releases on your preferred streaming platform. Prepare some popcorn, nachos, or your favorite movie snacks. Get comfortable on the couch with a soft blanket and dim the lights. Lose yourself in the world of cinema and experience a range of emotions through storytelling.",
        status: 'Low',
    },
]

export async function fetchList() {
    try {
        let list = await AsyncStorage.getItem('list');

        if (!list) {
            await AsyncStorage.setItem('list', JSON.stringify(initialList));
            return initialList;
        }
        
        return JSON.parse(list);
    } catch (error) {
        console.log(`Error fetching list: ${error}`);
    }
}