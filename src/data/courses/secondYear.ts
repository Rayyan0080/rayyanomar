/** Second-year courses (CSI2110, SEG2900, GNG2101, SEG2105). */
import type { Course } from '../../types';
import { GH, csi, seg } from './links';

export const secondYear: Course[] = [
  {
    code: 'CSI2110',
    name: 'Data Structures and Algorithms',
    description:
      'The concept of abstract data types. Simple methods of complexity analysis. Trees. The search problem: balanced trees, binary trees, hashing. Sorting. Graphs and simple graph algorithms: traversal, minimum spanning tree. Strings and pattern matching. Prerequisites: ITI 1121, MAT 1348.',
    descriptionSource: 'CSI2110 syllabus, Spring/Summer 2026 (official calendar description)',
    concepts: ['Abstract data types and Big-O analysis', 'Linked lists, stacks, queues and deques', 'Priority queues and heaps', 'Sorting (insertion, merge, quick, heap sort)', 'Graphs: BFS, DFS, shortest paths', 'String pattern matching'],
    specs: ['Language: Java', 'Coursework: 5 labs, about 1,900 lines of Java', 'Textbook: Goodrich, Tamassia and Goldwasser, Data Structures and Algorithms in Java'],
    links: [{ label: 'Repository', href: `${GH}/CSI-2110-Labs` }],
    labs: [
      {
        slug: 'lab-1', specs: ['Language: Java (JDK standard library)', '7 source files, about 454 lines', 'Entry point: Main.main', 'java.util.Arrays, java.util.Random'], number: '1', name: 'Lab 1: Sequence ADTs and Linked List Fundamentals',
        objective: 'This lab focuses on understanding abstract data types built around integer sequences and list structures. It introduces array-based and linked-list implementations, recursion, and core operations such as insertion, deletion, traversal, lookup, and comparison.',
        concepts: ['Array-based sequence behavior', 'Singly linked list operations', 'Circular list rotation', 'Doubly linked list operations', 'Recursive algorithms for sum, maximum, and reverse printing', 'Deep-copy and equivalence checks for data structures', 'Edge-case validation and exception handling'],
        files: ['ArrayIntegerSequence.java', 'LinkedIntegerSequence.java', 'CircularIntegerList.java', 'DoublyIntegerList.java', 'Lab1Utilities.java', 'Main.java'],
        links: csi('Lab/Lab1'),
      },
      {
        slug: 'lab-2', specs: ['Language: Java (JDK standard library)', '5 source files, about 268 lines'], number: '2', name: 'Lab 2: Linear Data Structures and Ticket Processing',
        objective: 'This lab applies stacks, queues, deques, and list structures to a simplified ticket-processing system. The goal is to understand how ADTs behave in real-world situations and to compare array-backed and linked implementations.',
        concepts: ['Stack ADT and stack applications', 'Queue ADT and circular-array queue behavior', 'Deque operations from both ends', 'Dynamic-array list implementation', 'Positional list / iterator concepts', 'Ticket processing, undo actions, and queue-based service simulation', 'Complexity analysis and design trade-offs'],
        files: ['Stack.java', 'ArrayStack.java', 'Queue.java', 'CircularArrayQueue.java', 'Ticket.java'],
        links: csi('Lab/Lab2'),
      },
      {
        slug: 'lab-3', specs: ['Language: Java (JDK standard library)', '6 source files, about 423 lines', 'Entry point: MainTester.main'], number: '3', name: 'Lab 3: Priority Queues and Heaps',
        objective: 'This lab introduces priority queues as an ADT and demonstrates how heaps provide efficient insert and remove-min operations. The implementation is designed around the idea that the smallest priority item is always available at the root of a min-heap.',
        concepts: ['Priority queue behavior', 'Heap structure and heap-order property', 'Insert and remove-min complexity', 'Min-heap representation in arrays', 'Task-based data objects with priorities', 'Efficiency comparisons against unsorted list implementations'],
        files: ['HeapPriorityQueue.java', 'ListPriorityQueue.java', 'PriorityQueue.java', 'Task.java', 'Entry.java', 'MainTester.java'],
        links: csi('Lab/lab3'),
      },
      {
        slug: 'lab-4', specs: ['Language: Java (JDK standard library)', '3 source files, about 128 lines'], number: '4', name: 'Lab 4: Sorting Algorithms and String Pattern Matching',
        objective: 'This lab focuses on sorting strategies and the divide-and-conquer pattern. It compares simple sorting with efficient algorithms and also introduces brute-force pattern matching in text.',
        concepts: ['Insertion sort as a baseline algorithm', 'Merge-sort and divide-and-conquer design', 'Quick-sort and pivot selection', 'Heap-sort and heap-based sorting', 'Algorithm comparison across best, average, and worst cases', 'Stability and in-place sorting analysis', 'String searching and pattern occurrence counting'],
        files: ['SimpleSort.java', 'MergeSort.java', 'StudentRecord.java'],
        links: csi('Lab/lab4'),
      },
      {
        slug: 'lab-5', specs: ['Language: Java (JDK standard library)', '7 source files, about 665 lines', 'Entry point: GraphApp.main', 'Group lab'], number: '5', name: 'Lab 5: Graphs, Traversals and Shortest Paths',
        objective: 'This lab focuses on graph theory and route-planning logic. It models locations as vertices and roads as weighted edges, then implements graph algorithms for traversal, reachability checking, and shortest path computation.',
        concepts: ['Graph ADT design', 'Adjacency-list graph representation', 'Breadth-first search (BFS)', 'Depth-first search (DFS)', 'Reachability and cycle detection', 'Minimum-edge path analysis', 'Weighted graphs and distance-aware navigation', "Dijkstra's algorithm and Bellman-Ford concepts", 'Path reconstruction and graph validation'],
        files: ['Graph.java', 'AdjacencyListGraph.java', 'BreadthFirstSearch.java', 'DepthFirstSearch.java', 'WeightedEdge.java', 'Location.java', 'GraphApp.java'],
        links: csi('Lab/lab5'),
      },
    ],
  },
  {
    code: 'SEG2900',
    name: 'Professional Communication and Responsibility',
  },
  {
    code: 'GNG2101',
    name: 'Introduction to Product Development for Engineers and Computer Scientists',
    description:
      'A hands-on, team-based introduction to product development for engineers and computer scientists. A "Design for X" approach is applied in open-ended, client-based design projects, covering economics, sustainability, business models, marketing, ethics and intellectual property. Prerequisite for software engineering: SEG 2900.',
    descriptionSource: 'uOttawa course catalogue (summarized)',
  },
  {
    code: 'SEG2105',
    name: 'Introduction to Software Engineering',
    description:
      'Principles of software engineering: requirements, design and testing. Review of object orientation, object-oriented analysis with UML, frameworks and APIs, client-server architecture, and an introduction to user interface technology. Prerequisite: ITI 1121.',
    descriptionSource: 'uOttawa calendar (earlier edition, summarized)',
    concepts: ['Object-oriented design and UML', 'Team development with Git and GitHub', 'Android app development (activities, intents, layouts)', 'Client-server architecture with frameworks', 'Cloud databases (Firebase)', 'UI testing with Espresso'],
    specs: ['Languages: Java (desktop and Android)', 'Android: Gradle (Kotlin DSL), minSdk 24, targetSdk 34-36', 'Backends: Firebase Realtime Database, Firebase Authentication and Cloud Firestore', 'Frameworks: OCSF client-server framework'],
    links: [{ label: 'Repository', href: `${GH}/SEG2105-Coursework` }],
    assignments: [
      {
        slug: 'simplechat', concepts: ['Client-server architecture', 'Framework hook methods (AbstractClient / AbstractServer)', 'Sockets and threads', 'Command parsing in a console UI'], specs: ['Language: Java', '6 source files, about 601 lines, plus the OCSF framework', 'Entry points: ClientConsole (client) and ServerConsole (server)', 'Default port: 5555 over TCP sockets', 'Test harness: SemiAutoChatRunner'],
        name: 'simpleChat: Client-Server Chat',
        objective: "A console chat application built on the course's Object Client-Server Framework (OCSF), extending the provided base code.",
        implementation: [
          'ChatClient / ClientConsole: a client that needs a login ID and reports when it cannot connect',
          'EchoServer / ServerConsole: a server that listens on port 5555 by default and accepts console commands',
          "SemiAutoChatRunner runs the course's semi-automatic test cases; a recorded run is included",
        ],
        tools: ['Java', 'Sockets (OCSF)'],
        links: [...seg('assignments/simpleChat'), { label: 'Original fork with history', href: `${GH}/simpleChat` }],
      },
      {
        slug: 'otams', concepts: ['Role-based access control', 'Approval workflows', 'Team development with Git'], specs: ['Platform: Android (Java), Gradle', 'Backend: Firebase Authentication and Cloud Firestore'],
        name: 'Course Project: OTAMS Tutoring App (Group 7)',
        objective: 'Team Android app for booking tutoring sessions. See the project page for details.',
        links: [{ label: 'Project page', href: '/projects/university-projects/otams' }],
      },
    ],
    labs: [
      {
        slug: 'lab-1', specs: ['Git and GitHub', 'Plain text files, one per team member'], number: '1', name: 'Lab 1: Team Git Workflow',
        objective: 'The team set up a shared GitHub repository and practised cloning, committing, pushing and resolving merge conflicts. Each member added their own file and their name to team.txt.',
        concepts: ['Git clone/commit/push/pull', 'Merge conflicts', 'Team collaboration on GitHub'],
        links: seg('labs/lab-1-git-workflow'),
      },
      {
        slug: 'lab-2', specs: ['Language: Java', '2 source files, about 291 lines', 'Entry point: PointCPTest.main (command-line or prompted input)'], number: '2', name: 'Lab 2: PointCP Design',
        objective: 'PointCP stores a point in either polar or cartesian form and converts between them. PointCPTest reads a coordinate type and two values and prints the point in both forms, as a basis for discussing design trade-offs between internal representations.',
        concepts: ['Class design', 'Encapsulation', 'Alternative internal representations', 'Design trade-offs'],
        links: seg('labs/lab-2-pointcp'),
      },
      {
        slug: 'lab-3', specs: ['Platform: Android, written in Java', 'Build: Gradle (Kotlin DSL), minSdk 24, targetSdk 36, Java 11', '3 source files, about 154 lines', 'Libraries: AndroidX AppCompat, Material, ConstraintLayout', 'Default JUnit and Espresso test stubs'], number: '3', name: 'Lab 3: Calculator App',
        objective: 'An Android calculator. Digit buttons build the current number, and operator buttons are handled with an Operator enum that tracks the pending operation.',
        concepts: ['Android Studio project setup', 'XML layouts', 'Button click handlers', 'UI state in an Activity'],
        links: seg('labs/lab-3-calculator'),
      },
      {
        slug: 'lab-4', specs: ['Platform: Android, written in Java', 'Build: Gradle (Kotlin DSL), minSdk 24, targetSdk 34, Java 8', '6 source files, about 174 lines', 'Activities: MainActivity, LogoSelectorActivity, ConfirmationActivity', 'Libraries: AndroidX AppCompat, Material, ConstraintLayout'], number: '4', name: 'Lab 4: Team Logo App',
        objective: 'A multi-screen Android app: enter a team name and postal code, pick a logo on a second screen, open the postal code in Google Maps with an implicit intent, and see a confirmation screen.',
        concepts: ['Explicit and implicit intents', 'startActivityForResult / onActivityResult', 'Passing Serializable objects between activities'],
        links: seg('labs/lab-4-team-logo'),
      },
      {
        slug: 'lab-5', specs: ['Platform: Android instrumented tests (Java)', '2 test classes, about 59 lines', 'Libraries: Espresso, AndroidX Test (ActivityScenarioRule), JUnit 4'], number: '5', name: 'Lab 5: Espresso UI Tests',
        objective: 'Instrumented Espresso tests for a student registration screen that type into the form, press register, and check the validation errors shown.',
        concepts: ['Android instrumented testing', 'ActivityScenarioRule', 'Espresso onView / perform / check', 'Input validation'],
        links: seg('labs/lab-5-espresso-tests'),
      },
      {
        slug: 'firebase-lab', specs: ['Platform: Android, written in Java', 'Build: Gradle (Kotlin DSL), minSdk 24, targetSdk 36, Java 11', '5 source files, about 238 lines', 'Library: Firebase Realtime Database', 'Data: a "products" node of {id, name, price} records', 'Requires your own google-services.json'], name: 'Firebase Lab: Product Catalog',
        objective: 'An Android product catalog backed by Firebase Realtime Database. Products are added from a form, listed live, and updated or deleted from a dialog opened by a long press.',
        concepts: ['Firebase Realtime Database', 'Create, read, update and delete', 'Real-time listeners', 'Custom list adapters'],
        links: seg('labs/lab-firebase-product-catalog'),
      },
    ],
  },
];
