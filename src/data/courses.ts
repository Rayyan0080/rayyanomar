import { Course, Link } from '../types';

/**
 * University of Ottawa courses, BASc Software Engineering (Co-op).
 * Scope (per Rayyan): ITI, CSI and SEG courses, showing only assignments and labs.
 *
 * Sources:
 *  - ITI1120, ITI1121 and CSI2110: the README of each course repository on GitHub.
 *  - SEG courses: Rayyan's own submissions and GitHub repos.
 */

const GH = 'https://github.com/Rayyan0080';

/** Link to a folder (or file) inside one of the course repositories. */
const src = (repo: string, branch: string, path: string, label = 'Source code'): Link[] => [
  { label, href: encodeURI(`${GH}/${repo}/tree/${branch}/${path}`) },
];
const py = (path: string) => src('phythone-coursework', 'main', path);
const iti = (path: string) => src('ITI1121', 'main', path);
const csi = (path: string) => src('CSI-2110-Labs', 'master', path);
const seg = (path: string) => src('SEG2105-Coursework', 'main', path);

export const courses: Course[] = [
  {
    code: 'ITI1120',
    name: 'Introduction to Computing I',
    links: [{ label: 'Repository', href: `${GH}/phythone-coursework` }],
    assignments: [
      {
        slug: 'assignment-2',
        number: '2',
        name: 'Assignment 2: Quiz Programs and Utility Functions',
        objective: 'Practise functions, conditionals and user interaction in Python.',
        problem:
          'Part 1: an interactive program that welcomes a student and runs an elementary-school quiz (exponents and logarithms) or a high-school quiz (solving quadratic equations). Part 2: a set of independent functions.',
        tools: ['Python 3', 'IDLE'],
        links: py('Asing/Assignment 2'),
      },
      {
        slug: 'assignment-3',
        number: '3',
        name: 'Assignment 3: Number and String Processing',
        objective: 'Practise loops and string manipulation, including solutions that avoid built-in string methods.',
        problem:
          'Part 1: split a number string into equal pieces and test whether the pieces increase. Part 2: ten separate functions on numbers and strings.',
        tools: ['Python 3'],
        links: py('Asing/a3_300434818'),
      },
      {
        slug: 'assignment-4',
        number: '4',
        name: 'Assignment 4: List Algorithms and a Card Game',
        objective: 'Work with lists and files, and build a complete text-based game.',
        problem:
          'Part 1: four list-processing questions. Part 2: a two-player card game against a computer dealer in which matching pairs are discarded.',
        tools: ['Python 3'],
        links: py('Asing/Assignment 4'),
      },
      {
        slug: 'assignment-5',
        number: '5',
        name: 'Assignment 5: Friend Recommendations',
        objective: 'Model a social network from a file and compute statistics and recommendations.',
        problem:
          'Read a network of users and friendships from a file, report statistics, and recommend a new friend for a user based on common friends.',
        tools: ['Python 3'],
        links: py('Asing/Assignment V'),
      },
    ],
    labs: [
      { slug: 'lab-1', number: '1', name: 'Lab 1: Introduction to the Lab Environment', objective: 'Get set up in the lab environment and run first Python programs.', tools: ['Python 3', 'IDLE', 'turtle module', 'Blockly'], links: py('Lab/lab1-solutions/lab1-solutions') },
      { slug: 'lab-2', number: '2', name: 'Lab 2: Evaluating Expressions', objective: 'Predict the value of Python expressions, then check them in the interpreter and explain any differences.', tools: ['Python interpreter'], links: py('Lab/lab2-Solutions1/lab2-Solutions') },
      { slug: 'lab-3', number: '3', name: 'Lab 3: Functions and Conditionals', concepts: ['Defining functions', 'if / elif / else', 'Divisibility tests'], tools: ['Python 3'], links: py('Lab/Lab3-solutions1/Lab3-solutions') },
      { slug: 'lab-5', number: '5', name: 'Lab 5: Loops and Functions', concepts: ['for loops', 'Tracing loop execution', 'Functions such as is_sorted and perfect-number tests'], tools: ['Python 3'], links: py('Lab/lab5-solutions/lab5-solutions') },
      { slug: 'lab-6', number: '6', name: 'Lab 6: while Loops and Lists', concepts: ['while loops', 'Creating and modifying lists', 'Prime testing'], tools: ['Python 3'], links: py('Lab/lab6-solutions/lab6-solutions') },
      { slug: 'lab-7', number: '7', name: 'Lab 7', tools: ['Python 3'], links: py('Lab/lab7_solutions.py') },
      { slug: 'lab-8', number: '8', name: 'Lab 8: 2D Lists, Matrices and Files', concepts: ['2D lists and matrices', 'Magic squares', 'Reading text files', 'In-place list algorithms'], tools: ['Python 3'], links: py('Lab/lab8-solutions/lab8-solutions') },
      { slug: 'lab-9', number: '9', name: 'Lab 9: Dictionaries, Searching and Sorting', concepts: ['Dictionaries', 'Linear and binary search', 'Selection sort', 'Algorithm efficiency', 'Exception handling'], tools: ['Python 3'], links: py('Lab/lab9-solutions/lab9-solutions') },
      { slug: 'lab-10', number: '10', name: 'Lab 10: Objects', concepts: ['Classes and objects', 'Methods and attributes'], tools: ['Python 3'], links: py('Lab/lab10-solutions/lab10-solutions') },
    ],
  },

  {
    code: 'ITI1121',
    name: 'Introduction to Computing II',
    links: [{ label: 'Repository', href: `${GH}/ITI1121` }],
    assignments: [
      {
        slug: 'assignment-1', number: '1', name: 'Assignment 1: Parking Lot',
        objective: 'This assignment implements a simple parking lot system that reads a parking configuration and occupancy file, then manages vehicle parking and removal according to parking rules. It emphasizes file-based input, object modeling, and lot-management logic.',
        output: ['Parking status after each operation', 'Lot occupancy and spot availability', 'Whether a car can park or must leave because of rules'],
        links: iti('Asing/a1_300434818'),
      },
      {
        slug: 'assignment-2', number: '2', name: 'Assignment 2: Parking Lot Simulator',
        objective: 'This assignment builds a simulation of a parking lot with queues, random arrivals, and probabilistic departures. It models how cars arrive over time and how they are assigned to parking spots or wait in line if the lot is full.',
        output: ['Simulation logs of car arrivals and departures', 'Queue length over time', 'Parking occupancy statistics', 'Simulation summary of lot usage'],
        links: iti('Asing/a2_300434818'),
      },
      {
        slug: 'assignment-3', number: '3', name: 'Assignment 3: Capacity Optimizer',
        objective: 'This assignment goes a step further by computing the minimum number of parking spots needed to reduce excessive queue buildup. It tests a capacity model using hourly arrival patterns and departure probabilities.',
        output: ['Recommended capacity', 'Queue analysis', 'Lot performance summary', 'Simulation results for different conditions'],
        links: iti('Asing/a3_300434818'),
      },
      {
        slug: 'assignment-4', number: '4', name: 'Assignment 4: String Buffer, Iterators and Recursion',
        objective: 'This assignment focuses on custom data structures and algorithmic processing. It includes an ITIStringBuffer implementation, linked-list behavior, iteration, and recursive list processing.',
        output: ['Modified string content and buffer operations', 'List traversal and iteration results', 'Recursively processed list data'],
        links: iti('Asing/a4_300434818'),
      },
    ],
    labs: [
      { slug: 'lab-1', number: '1', name: 'Lab 1: Java Arrays and Methods', objective: 'This lab covers basic Java array operations, including array insertion, average calculation, reverse sorting, and a few demonstration programs.', output: ['Array contents before and after processing', 'Average and sorted values', 'Reversed and inserted arrays'], links: iti('Lab/lab1_300434818') },
      { slug: 'lab-2', number: '2', name: 'Lab 2: Combinations and a Door Lock', objective: 'This lab includes combinatorics and a door-lock simulation/probability exercise. It introduces logic-based problem solving and constrained decision-making.', output: ['Combinations or valid configurations', 'Door-lock outcomes or access states'], links: iti('Lab/lab2_300434818') },
      { slug: 'lab-3', number: '3', name: 'Lab 3: Rational Numbers', objective: 'This lab introduces rational numbers and helper utilities for fraction arithmetic. It focuses on math operations with numerators and denominators.', output: ['Rational arithmetic results', 'Simplified fractions', 'Utility-generated numeric outputs'], links: iti('Lab/lab3_300434818') },
      { slug: 'lab-4', number: '4', name: 'Lab 4: News Feed', objective: 'This lab models a social media/news feed application using interfaces and posts. It includes likeable posts, text posts, photo posts, and a feed manager.', output: ['News feed entries', 'Post content with likes', 'Feed updates and ordering'], links: iti('Lab/lab4_300434818') },
      { slug: 'lab-5', number: '5', name: 'Lab 5: Books, Libraries and Series', objective: 'This lab introduces books, libraries, and numeric series. It includes abstract series classes for arithmetic and geometric sequences, plus library ordering and comparison logic.', output: ['Book catalogs', 'Sorted or compared records', 'Series values and totals'], links: iti('Lab/lab5_300434818') },
      { slug: 'lab-6', number: '6', name: 'Lab 6: Stacks and Dictionaries', objective: 'This lab focuses on stacks, dictionaries, maps, and key-value pairs. It teaches generic data structures and their applications.', output: ['Stack push/pop results', 'Dictionary lookups and mappings', 'Pair structure usage'], links: iti('Lab/lab6_300434818') },
      { slug: 'lab-7', number: '7', name: 'Lab 7: Exceptions', objective: 'This lab builds on stack concepts and adds banking/account logic with exception handling, including insufficient funds and stack overflow cases.', output: ['Deposit and withdrawal activity', 'Stack exceptions', 'Account state updates'], links: iti('Lab/lab7_300434818') },
      { slug: 'lab-8', number: '8', name: 'Lab 8: Queues and Simulation', objective: 'This lab focuses on queues and customer service simulation. It models a cashier line and queue processing behavior.', output: ['Queue states', 'Customer processing order', 'Cashier service summary'], links: iti('Lab/lab8_300434818') },
      { slug: 'lab-9', number: '9', name: 'Lab 9: Playlists and Sorting', objective: 'This lab works with sorting, playlists, and secret message handling. It covers custom comparators and collection ordering.', output: ['Playlist sorted by title/artist/album', 'Decoded or transformed secret message'], links: iti('Lab/lab9_300434818') },
      { slug: 'lab-10', number: '10', name: 'Lab 10: Ordered Lists', objective: 'This lab covers ordered structures and ordered lists, introducing sorted container behavior and ordered data management.', output: ['Inserted values in sorted order', 'Ordered list operations', 'Structure traversal results'], links: iti('Lab/lab10_300434818 (2)/lab10_300434818') },
      { slug: 'lab-11', number: '11', name: 'Lab 11: Iterators and Bit Lists', objective: 'This lab introduces bit lists and iterative processes, with iterator support and bit-level operations.', output: ['Bit values and set/clear operations', 'Iterator traversal through data', 'Iterative algorithm results'], links: iti('Lab/lab11_300434818') },
    ],
  },

  {
    code: 'CSI2110',
    name: 'Data Structures and Algorithms',
    links: [{ label: 'Repository', href: `${GH}/CSI-2110-Labs` }],
    labs: [
      {
        slug: 'lab-1', number: '1', name: 'Lab 1: Sequence ADTs and Linked List Fundamentals',
        objective: 'This lab focuses on understanding abstract data types built around integer sequences and list structures. It introduces array-based and linked-list implementations, recursion, and core operations such as insertion, deletion, traversal, lookup, and comparison.',
        concepts: ['Array-based sequence behavior', 'Singly linked list operations', 'Circular list rotation', 'Doubly linked list operations', 'Recursive algorithms for sum, maximum, and reverse printing', 'Deep-copy and equivalence checks for data structures', 'Edge-case validation and exception handling'],
        files: ['ArrayIntegerSequence.java', 'LinkedIntegerSequence.java', 'CircularIntegerList.java', 'DoublyIntegerList.java', 'Lab1Utilities.java', 'Main.java'],
        links: csi('Lab/Lab1'),
      },
      {
        slug: 'lab-2', number: '2', name: 'Lab 2: Linear Data Structures and Ticket Processing',
        objective: 'This lab applies stacks, queues, deques, and list structures to a simplified ticket-processing system. The goal is to understand how ADTs behave in real-world situations and to compare array-backed and linked implementations.',
        concepts: ['Stack ADT and stack applications', 'Queue ADT and circular-array queue behavior', 'Deque operations from both ends', 'Dynamic-array list implementation', 'Positional list / iterator concepts', 'Ticket processing, undo actions, and queue-based service simulation', 'Complexity analysis and design trade-offs'],
        files: ['Stack.java', 'ArrayStack.java', 'Queue.java', 'CircularArrayQueue.java', 'Ticket.java'],
        links: csi('Lab/Lab2'),
      },
      {
        slug: 'lab-3', number: '3', name: 'Lab 3: Priority Queues and Heaps',
        objective: 'This lab introduces priority queues as an ADT and demonstrates how heaps provide efficient insert and remove-min operations. The implementation is designed around the idea that the smallest priority item is always available at the root of a min-heap.',
        concepts: ['Priority queue behavior', 'Heap structure and heap-order property', 'Insert and remove-min complexity', 'Min-heap representation in arrays', 'Task-based data objects with priorities', 'Efficiency comparisons against unsorted list implementations'],
        files: ['HeapPriorityQueue.java', 'ListPriorityQueue.java', 'PriorityQueue.java', 'Task.java', 'Entry.java', 'MainTester.java'],
        links: csi('Lab/lab3'),
      },
      {
        slug: 'lab-4', number: '4', name: 'Lab 4: Sorting Algorithms and String Pattern Matching',
        objective: 'This lab focuses on sorting strategies and the divide-and-conquer pattern. It compares simple sorting with efficient algorithms and also introduces brute-force pattern matching in text.',
        concepts: ['Insertion sort as a baseline algorithm', 'Merge-sort and divide-and-conquer design', 'Quick-sort and pivot selection', 'Heap-sort and heap-based sorting', 'Algorithm comparison across best, average, and worst cases', 'Stability and in-place sorting analysis', 'String searching and pattern occurrence counting'],
        files: ['SimpleSort.java', 'MergeSort.java', 'StudentRecord.java'],
        links: csi('Lab/lab4'),
      },
      {
        slug: 'lab-5', number: '5', name: 'Lab 5: Graphs, Traversals and Shortest Paths',
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
  },
  {
    code: 'SEG2105',
    name: 'Introduction to Software Engineering',
    links: [{ label: 'Repository', href: `${GH}/SEG2105-Coursework` }],
    assignments: [
      {
        slug: 'simplechat',
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
        slug: 'otams',
        name: 'Course Project: OTAMS Tutoring App (Group 7)',
        objective: 'Team Android app for booking tutoring sessions. See the project page for details.',
        links: [{ label: 'Project page', href: '/projects/university-projects/otams' }],
      },
    ],
    labs: [
      {
        slug: 'lab-1', number: '1', name: 'Lab 1: Team Git Workflow',
        objective: 'The team set up a shared GitHub repository and practised cloning, committing, pushing and resolving merge conflicts. Each member added their own file and their name to team.txt.',
        concepts: ['Git clone/commit/push/pull', 'Merge conflicts', 'Team collaboration on GitHub'],
        links: seg('labs/lab-1-git-workflow'),
      },
      {
        slug: 'lab-2', number: '2', name: 'Lab 2: PointCP Design',
        objective: 'PointCP stores a point in either polar or cartesian form and converts between them. PointCPTest reads a coordinate type and two values and prints the point in both forms, as a basis for discussing design trade-offs between internal representations.',
        concepts: ['Class design', 'Encapsulation', 'Alternative internal representations', 'Design trade-offs'],
        links: seg('labs/lab-2-pointcp'),
      },
      {
        slug: 'lab-3', number: '3', name: 'Lab 3: Calculator App',
        objective: 'An Android calculator. Digit buttons build the current number, and operator buttons are handled with an Operator enum that tracks the pending operation.',
        concepts: ['Android Studio project setup', 'XML layouts', 'Button click handlers', 'UI state in an Activity'],
        links: seg('labs/lab-3-calculator'),
      },
      {
        slug: 'lab-4', number: '4', name: 'Lab 4: Team Logo App',
        objective: 'A multi-screen Android app: enter a team name and postal code, pick a logo on a second screen, open the postal code in Google Maps with an implicit intent, and see a confirmation screen.',
        concepts: ['Explicit and implicit intents', 'startActivityForResult / onActivityResult', 'Passing Serializable objects between activities'],
        links: seg('labs/lab-4-team-logo'),
      },
      {
        slug: 'lab-5', number: '5', name: 'Lab 5: Espresso UI Tests',
        objective: 'Instrumented Espresso tests for a student registration screen that type into the form, press register, and check the validation errors shown.',
        concepts: ['Android instrumented testing', 'ActivityScenarioRule', 'Espresso onView / perform / check', 'Input validation'],
        links: seg('labs/lab-5-espresso-tests'),
      },
      {
        slug: 'firebase-lab', name: 'Firebase Lab: Product Catalog',
        objective: 'An Android product catalog backed by Firebase Realtime Database. Products are added from a form, listed live, and updated or deleted from a dialog opened by a long press.',
        concepts: ['Firebase Realtime Database', 'Create, read, update and delete', 'Real-time listeners', 'Custom list adapters'],
        links: seg('labs/lab-firebase-product-catalog'),
      },
    ],
  },
  {
    code: 'SEG3125',
    name: 'Analysis and Design of User Interfaces',
    assignments: [
      {
        slug: 'assignment-1', number: '1', name: 'Assignment 1: Portfolio',
        objective: 'Build and host a portfolio entry page using principles of visual communication.',
        tools: ['HTML', 'CSS', 'Bootstrap 5', 'GitHub Pages'],
        implementation: ['Terminal-themed portfolio page introducing my interests and way of working'],
        links: [{ label: 'Project page', href: '/projects/university-projects/seg3125-portfolio' }],
      },
      {
        slug: 'assignment-2', number: '2', name: 'Assignment 2: Service Website',
        objective: 'Design a website for a service business, prototyped first in Figma.',
        tools: ['React', 'Bootstrap', 'Figma'],
        implementation: ['Precision Auto Repair: services and pricing, appointment booking form and confirmation'],
        links: [{ label: 'Project page', href: '/projects/university-projects/precision-auto-repair' }],
      },
      {
        slug: 'assignment-3', number: '3', name: 'Assignment 3: Memory Game',
        objective: 'Design a memory game around human cognition.',
        tools: ['React'],
        implementation: ['Sequence-memory game with three difficulty levels and a results page'],
        links: [{ label: 'Project page', href: '/projects/university-projects/memory-game' }],
      },
      {
        slug: 'assignment-4', number: '4', name: 'Assignment 4: E-commerce',
        objective: 'Design an e-commerce site with faceted search, evaluated against usability heuristics.',
        tools: ['React'],
        implementation: ['TechNova electronics store: filters, cart, multi-step checkout and feedback survey'],
        links: [{ label: 'Project page', href: '/projects/university-projects/technova' }],
      },
      {
        slug: 'assignment-5', number: '5', name: 'Assignment 5: Dashboard',
        objective: 'Design a data visualization dashboard with internationalization.',
        tools: ['React', 'Recharts'],
        implementation: ['Formula 1 dashboard with filters, charts and English/French language switching'],
        links: [{ label: 'Project page', href: '/projects/university-projects/f1-dashboard' }],
      },
    ],
  },
  {
    code: 'SEG3101',
    name: 'Software Requirements Analysis',
    assignments: [
      {
        slug: 'assignment-1', number: '1', name: 'Assignment 1: Online Grocery Store Requirements',
        objective: 'Practise the requirements engineering process for a real-world scenario.',
        problem:
          'A small independent grocery store wants an online platform (website and mobile app) where customers can browse, search, buy and pay for groceries, and choose delivery or store pickup.',
        requirements: [
          'Problem definition',
          'Stakeholder identification and analysis',
          'Elicitation techniques',
          'Functional and non-functional requirements',
          'Prioritization',
          'Traceability',
        ],
        approach:
          'Selected interviews, surveys and task observation as elicitation techniques. The report separates evidence from the scenario from illustrative findings and lists the evidence still to be collected, since no live elicitation took place.',
        tools: ['LaTeX'],
        implementation: [
          'Requirements report with 18 functional requirements (FR-01 to FR-18) and 6 non-functional requirements (NFR-01 to NFR-06)',
          'MoSCoW prioritization table with a justification of the framework',
          'Traceability between stakeholders, elicitation findings and requirements',
        ],
      },
    ],
    labs: [
      {
        slug: 'lab-1', number: '1', name: 'Lab 1: Evaluating Requirement Statements',
        objective: 'Judge whether requirement statements for an electronic library system are well written, and rewrite the flawed ones.',
        concepts: ['"shall" statements with the system as subject', 'One requirement per statement', 'Testability and ambiguity', 'Inclusive language'],
        work: ['Evaluated each statement, explained its problems and proposed rewrites, such as splitting compound requirements and replacing vague timeframes with measurable ones'],
      },
    ],
  },
  {
    code: 'SEG3102',
    name: 'Software Design and Architecture',
    assignments: [
      {
        slug: 'assignment-1', number: '1', name: 'Assignment 1: DDD Contracts',
        objective: 'Apply domain-driven design to an airport employee scheduling system.',
        problem: 'An airport with hundreds of employees is replacing its employee management and scheduling system.',
        implementation: [
          'Identified employee schedule management as the core domain, with payroll, employee records, access control and AI schedule generation as supporting or generic subdomains',
          'Documented domain assumptions, such as employees belonging to exactly one department',
          'Placed the "select work shifts" use case in the core bounded context',
        ],
        note: 'Team of two.',
      },
    ],
    labs: [
      { slug: 'lab-1', number: '1', name: 'Lab 1: Angular Basics', tools: ['Angular', 'TypeScript'], work: ['Temperature converter and calculator components'] },
      { slug: 'lab-2', number: '2', name: 'Lab 2: Spring Boot Web App', tools: ['Kotlin', 'Spring Boot', 'Gradle'], work: ['Web controller serving a server-rendered home page template'] },
      { slug: 'lab-3', number: '3', name: 'Lab 3: Shopping List', tools: ['Angular', 'TypeScript'], work: ['Shopping list with list-entry components'] },
      { slug: 'lab-4', number: '4', name: 'Lab 4: Forms and Services', tools: ['Angular', 'TypeScript'], work: ['User form and user details components sharing data through a service, with server-side rendering set up'] },
      { slug: 'lab-5', number: '5', name: 'Lab 5: Address List', tools: ['Angular', 'TypeScript'], work: ['Address list with a notification service, header and sign-in components, and environment configuration'] },
      { slug: 'lab-6', number: '6', name: 'Lab 6: REST Calculator', tools: ['Kotlin', 'Spring Boot'], work: ['REST calculator API (CalculatorController)'] },
    ],
  },
];
