import { Course } from '../types';

/**
 * University of Ottawa courses, BASc Software Engineering (Co-op).
 * Scope (per Rayyan): ITI, CSI and SEG courses, plus GNG2101.
 *
 * Sources:
 *  - Course codes and names: unofficial transcript. Terms, grades and
 *    academic standing are deliberately not published.
 *  - Assignment and lab details: Rayyan's own submissions (archives named with
 *    his student number, lab reports for his lab group, his GitHub repos).
 *    Instructor solution sets, past exams and other students' files were not
 *    used as evidence of his work.
 *  - Topics: titles of lecture notes, lab handouts and course schedules.
 *
 * To add a course, append an object to `courses`. Any field left out shows as
 * a "not provided yet" placeholder on the page.
 */

const GH = 'https://github.com/Rayyan0080';

export const courses: Course[] = [
  {
    code: 'ITI1120',
    name: 'Introduction to Computing I',
    topics: [
      'Python programming environment (IDLE)',
      'Expressions, types and the math module',
      'Functions and conditional statements',
      'for and while loops',
      'Lists, 2D lists and matrices',
      'Reading and writing files',
      'Dictionaries',
      'Searching and sorting algorithms and their efficiency',
      'Exception handling',
      'Objects and classes',
    ],
    concepts: [
      'Decomposing problems into functions',
      'Iteration and accumulation patterns',
      'String processing without built-in helpers',
      'Graph-style data held in adjacency lists',
    ],
    skills: ['Python', 'Writing and testing functions', 'Input validation', 'File parsing'],
    summary:
      'Python assignments covering interactive programs, number and string processing, list algorithms, a text-based card game against a computer dealer, and a friend-recommendation program over a social network file.',
    assignments: [
      {
        slug: 'assignment-1',
        number: '1',
        name: 'Assignment 1',
        note: 'The archive on file contains only macOS metadata stubs, so the submission itself could not be read.',
      },
      {
        slug: 'assignment-2',
        number: '2',
        name: 'Assignment 2: Quiz Programs and Utility Functions',
        objective: 'Practise functions, conditionals and user interaction in Python.',
        problem:
          'Part 1: an interactive program that welcomes a student and runs an elementary-school quiz (exponents and logarithms) or a high-school quiz (solving quadratic equations). Part 2: a set of independent functions.',
        requirements: [
          'Elementary quiz on exponentiation and logarithms',
          'Quadratic equation solver for the high-school quiz',
          'Welcome banner built from the user\'s name and school type',
          'Minimum enclosing rectangle of a circle',
          'Vote percentage from a list of results, plus an interactive vote tally',
          'l2lo string transformation',
        ],
        approach: 'One function per task, with a main function driving the interactive part and test calls for each Part 2 function.',
        tools: ['Python 3', 'IDLE'],
        implementation: ['Part 1 interactive quiz program (134 lines)', 'Part 2 utility functions with test cases'],
      },
      {
        slug: 'assignment-3',
        number: '3',
        name: 'Assignment 3: Number and String Processing',
        objective: 'Practise loops and string manipulation, including solutions that avoid built-in string methods.',
        problem:
          'Part 1: split a number string into equal pieces and test whether the pieces increase. Part 2: ten separate functions on numbers and strings.',
        requirements: [
          'split_tester: split a digit string into pieces of length d and check that they strictly increase',
          'Sum of the odd divisors of n',
          'Sum of a series from user input',
          'nth Pell number',
          'Count "extraordinary" characters in a string',
          'Convert a casual number string to an integer',
          'Evaluate numbers in a custom alien numeral system, with and without string methods',
          'Encrypt a string by reversing and interleaving it',
          'oPify: insert o/p between characters by case',
          'Check whether a string is non-repetitive',
        ],
        tools: ['Python 3'],
        implementation: ['Part 1: split_tester and a driver program', 'Part 2: ten functions (260 lines)'],
      },
      {
        slug: 'assignment-4',
        number: '4',
        name: 'Assignment 4: List Algorithms and a Card Game',
        objective: 'Work with lists and files, and build a complete text-based game.',
        problem:
          'Part 1: four list-processing questions. Part 2: a two-player card game against a computer dealer in which matching pairs are discarded.',
        requirements: [
          'Count numbers in a list divisible by n',
          'Detect runs of two equal adjacent values',
          'Find the length of the longest run',
          'Read raw data from a file, clean it up and test whether it is "rigorous"',
          'Card game: build and shuffle a deck, deal, remove pairs, take turns with validated input',
        ],
        tools: ['Python 3'],
        implementation: [
          'Four Part 1 solutions, each with test code',
          'Card game (127 lines): deck creation, shuffling, dealing, pair removal, input validation and the game loop',
        ],
      },
      {
        slug: 'assignment-5',
        number: '5',
        name: 'Assignment 5: Friend Recommendations',
        objective: 'Model a social network from a file and compute statistics and recommendations.',
        problem:
          'Read a network of users and friendships from a file, report statistics, and recommend a new friend for a user based on common friends.',
        requirements: [
          'Parse the user count and friendship edges from a file, handling a missing file',
          'Compute friend-count statistics such as the maximum and average',
          'Recommend the non-friend with the most friends in common',
          'List the common friends of two users',
        ],
        tools: ['Python 3'],
        implementation: ['read_file, calculate_statistics, recommend_friend and common_friends_list, plus an interactive main (159 lines)'],
      },
    ],
    labs: [
      {
        slug: 'lab-1',
        number: '1',
        name: 'Lab 1: Introduction to the Lab Environment',
        objective: 'Get set up in the lab environment and run first Python programs.',
        concepts: ['Using IDLE', 'Writing and running a first program', 'Turtle graphics', 'Block-based programming puzzles'],
        tools: ['Python 3', 'IDLE', 'turtle module', 'Blockly'],
      },
      {
        slug: 'lab-2',
        number: '2',
        name: 'Lab 2: Evaluating Expressions',
        objective: 'Predict the value of Python expressions, then check them in the interpreter and explain any differences.',
        concepts: ['Operators and precedence', 'Numeric types', 'The math module'],
        tools: ['Python interpreter'],
      },
      {
        slug: 'lab-3',
        number: '3',
        name: 'Lab 3: Functions and Conditionals',
        concepts: ['Defining functions', 'if / elif / else', 'Divisibility tests'],
        tools: ['Python 3'],
      },
      {
        slug: 'lab-5',
        number: '5',
        name: 'Lab 5: Loops and Functions',
        concepts: ['for loops', 'Tracing loop execution', 'Functions such as is_sorted and perfect-number tests'],
        tools: ['Python 3'],
      },
      {
        slug: 'lab-6',
        number: '6',
        name: 'Lab 6: while Loops and Lists',
        concepts: ['while loops', 'Creating and modifying lists', 'Prime testing'],
        tools: ['Python 3'],
      },
      {
        slug: 'lab-7',
        number: '7',
        name: 'Lab 7',
        tools: ['Python 3'],
      },
      {
        slug: 'lab-8',
        number: '8',
        name: 'Lab 8: 2D Lists, Matrices and Files',
        concepts: ['2D lists and matrices', 'Magic squares', 'Reading text files', 'In-place list algorithms'],
        tools: ['Python 3'],
      },
      {
        slug: 'lab-9',
        number: '9',
        name: 'Lab 9: Dictionaries, Searching and Sorting',
        concepts: ['Dictionaries', 'Linear and binary search', 'Selection sort', 'Algorithm efficiency', 'Exception handling'],
        tools: ['Python 3'],
      },
      {
        slug: 'lab-10',
        number: '10',
        name: 'Lab 10: Objects',
        concepts: ['Classes and objects', 'Methods and attributes'],
        tools: ['Python 3'],
      },
    ],
  },
  {
    code: 'SEG2900',
    name: 'Professional Communication and Responsibility',
  },

  {
    code: 'ITI1121',
    name: 'Introduction to Computing II',
    topics: [
      'Object-oriented programming in Java',
      'Interfaces, inheritance and abstract classes',
      'Generics',
      'Stacks and queues (array-based and dynamic)',
      'Singly and doubly linked lists',
      'Iterators',
      'Exceptions',
      'Recursion',
      'Comparators and sorting',
      'File input',
    ],
    concepts: [
      'Encapsulation and equality',
      'Abstract data types and their implementations',
      'Discrete-event simulation with queues',
      'Probabilistic modelling (triangular distribution)',
    ],
    skills: ['Java', 'Implementing ADTs from interfaces', 'Testing with driver programs', 'Reading specifications closely'],
    summary:
      'Four connected assignments that grew a parking-lot model into a simulator and a capacity optimizer, plus eleven labs that implemented core Java data structures.',
    assignments: [
      {
        slug: 'assignment-1',
        number: '1',
        name: 'Assignment 1: Parking Lot',
        objective: 'Model a parking lot from an input file using classes.',
        problem:
          'Read a parking lot design and its occupancy from a file, store them, and support parking and removing cars according to the lot\'s parking rules.',
        requirements: [
          'Parse lot designs, including inputs with errors and extra whitespace',
          'Store the lot layout and the cars parked in it',
          'Park and remove cars while respecting the parking rules for each car type',
        ],
        tools: ['Java'],
        implementation: ['Car.java and ParkingLot.java (provided CarType and Util classes unchanged)'],
      },
      {
        slug: 'assignment-2',
        number: '2',
        name: 'Assignment 2: Parking Lot Simulator',
        objective: 'Simulate cars arriving at, parking in and leaving a lot over time.',
        problem:
          'Extend the parking lot into a simulation that manages arrivals, parking and departures, with departures drawn from a probability distribution.',
        requirements: [
          'Simulator that queues arriving cars and parks them when space allows',
          'Individual parking spots that track their car and arrival time',
          'Probabilistic departures using a triangular distribution',
        ],
        tools: ['Java'],
        implementation: ['Simulator.java, ParkingLot.java, Spot.java and TriangularDistribution.java'],
      },
      {
        slug: 'assignment-3',
        number: '3',
        name: 'Assignment 3: Capacity Optimizer',
        objective: 'Find the smallest lot that keeps the entrance queue under control.',
        problem:
          'Given an hourly arrival rate and a fixed departure distribution, determine the minimum number of spots needed to prevent excessive queue buildup at the entrance.',
        requirements: [
          'Run repeated simulations for each candidate lot size',
          'Increase the lot size until the average final queue length is within the threshold',
          'Validate the command-line arrival rate',
          'Add exception handling to the probability distribution',
        ],
        approach:
          'CapacityOptimizer starts at one spot and, for each size, runs ten simulations, averaging the queue length at the end of each run. It returns the first size whose average queue length is at most 5, timing each run.',
        tools: ['Java', 'Linked lists', 'Queues'],
        implementation: ['CapacityOptimizer.java plus updated ParkingLot, Simulator and LinkedQueue'],
      },
      {
        slug: 'assignment-4',
        number: '4',
        name: 'Assignment 4: String Buffer, Iterators and Recursion',
        objective: 'Implement a string buffer, extend iterators, and process lists recursively.',
        requirements: [
          'Q1: ITIStringBuffer',
          'Q2: extensions to a linked list iterator',
          'Q3: a recursive count method on a singly linked list',
        ],
        tools: ['Java'],
        implementation: ['Three questions, each with its own test class (Q1, Q2, Q3)'],
      },
    ],
    labs: [
      { slug: 'lab-1', number: '1', name: 'Lab 1: Java Arrays and Methods', concepts: ['Arrays', 'Static methods', 'Averages, medians, pass/fail counts', 'Array insertion and reverse sorting', 'Prime and Fibonacci functions'], tools: ['Java'] },
      { slug: 'lab-2', number: '2', name: 'Lab 2: Objects - Combination Lock', concepts: ['Classes and constructors', 'Object equality', 'Encapsulated state'], work: ['Combination and DoorLock classes: activate, open and track lock state'], tools: ['Java'] },
      { slug: 'lab-3', number: '3', name: 'Lab 3: Rational Numbers', concepts: ['Immutable value objects', 'equals and compareTo', 'Static and instance methods'], work: ['Rational class with arithmetic and comparison', 'findAndReplace utility on string arrays'], tools: ['Java'] },
      { slug: 'lab-4', number: '4', name: 'Lab 4: Interfaces and Inheritance', concepts: ['Interfaces', 'Inheritance', 'Comparable'], work: ['Likeable interface, Post with TextPost and PhotoPost subclasses, and a NewsFeed collection'], tools: ['Java'] },
      { slug: 'lab-5', number: '5', name: 'Lab 5: Abstract Classes and Comparators', concepts: ['Abstract classes', 'Comparator', 'Sequences'], work: ['Arithmetic and Geometric series built on AbstractSeries', 'Book library sorted with a BookComparator'], tools: ['Java'] },
      { slug: 'lab-6', number: '6', name: 'Lab 6: Generic Stacks and a Dictionary', concepts: ['Generics', 'Array-based stacks', 'Dynamic resizing', 'Map ADT'], work: ['ArrayStack and DynamicArrayStack', 'Dictionary implementing Map<String, Integer> with Pair entries'], tools: ['Java'] },
      { slug: 'lab-7', number: '7', name: 'Lab 7: Exceptions', concepts: ['Checked and unchecked exceptions', 'Custom exception classes'], work: ['FullStackException and NotEnoughMoneyException', 'Account class and exception exercises'], tools: ['Java'] },
      { slug: 'lab-8', number: '8', name: 'Lab 8: Queues and Simulation', concepts: ['Queue ADT', 'Circular array queues', 'Simulation'], work: ['ArrayQueue, plus Customer and Cashier classes for a checkout simulation'], tools: ['Java'] },
      { slug: 'lab-9', number: '9', name: 'Lab 9: Playlists and Sorting', concepts: ['Dynamic arrays', 'Comparators', 'File input'], work: ['PlayList and Song with sort-by-name, artist and album comparators', 'Loading songs from a file'], tools: ['Java'] },
      { slug: 'lab-10', number: '10', name: 'Lab 10: Ordered Linked List', concepts: ['Linked lists', 'Ordered insertion', 'Merging'], work: ['OrderedList implementing OrderedStructure, including merge'], tools: ['Java'] },
      { slug: 'lab-11', number: '11', name: 'Lab 11: Iterators and Bit Lists', concepts: ['Iterators', 'Inner classes', 'Bitwise operations'], work: ['BitList with an inner iterator', 'and, or, xor and complement on bit lists'], tools: ['Java'] },
    ],
  },

  {
    code: 'GNG2101',
    name: 'Introduction to Product Development for Engineers and Computer Scientists',
  },
  {
    code: 'SEG2105',
    name: 'Introduction to Software Engineering',
    topics: [
      'Object-oriented design with inheritance and interfaces',
      'Polymorphism',
      'Team development with Git and GitHub',
      'Android application development',
      'Cloud databases (Firebase)',
      'Client-server architecture',
    ],
    concepts: ['Designing class hierarchies', 'Programming to interfaces', 'Event handling', 'Client-server communication'],
    skills: ['Java', 'Android Studio', 'Firebase Realtime Database', 'Git collaboration'],
    summary:
      'Three in-class design exercises, team labs in a shared repository, and the simpleChat client-server assignment.',
    assignments: [
      {
        slug: 'simplechat',
        name: 'simpleChat: Client-Server Chat',
        objective: 'Extend a provided Java client-server chat application.',
        problem:
          'Starting from the course\'s simpleChat base code, implement the assigned exercises and verify them against the course test cases.',
        requirements: [
          'Client start-up with a login ID (connection refused without one)',
          'Server start-up on the default port 5555',
          'Server console commands',
        ],
        tools: ['Java', 'Sockets (course OCSF framework)'],
        implementation: [
          'Commits "ex1" and "ex2" implement the exercises on top of the provided base code',
          'A recorded run of the semi-automatic test suite is included in the repository',
        ],
        links: [{ label: 'Repository', href: `${GH}/simpleChat` }],
      },
    ],
    labs: [
      {
        slug: 'lab-1',
        number: '1',
        name: 'Lab 1: Team Git Workflow',
        objective: 'Set up a shared team repository and practise collaborating with Git.',
        concepts: ['Cloning, committing and pushing', 'Merge conflicts'],
        tools: ['Git', 'GitHub'],
        work: ['Hosted the team repository on my GitHub account and committed the lab 1 activities'],
        links: [{ label: 'Team repository', href: `${GH}/SEG2105-Lab` }],
      },
      {
        slug: 'firebase-lab',
        name: 'Firebase Lab: Product Catalog',
        objective: 'Connect an Android app to a cloud database.',
        concepts: ['Firebase Realtime Database', 'Listening for data changes', 'Create, update and delete operations'],
        tools: ['Android Studio', 'Java', 'Firebase'],
        work: ['Committed the Firebase lab project: a product catalog app that reads products from Firebase and updates or deletes them through a dialog'],
        links: [{ label: 'Team repository', href: `${GH}/SEG2105-Lab` }],
        note: 'This lab was completed in a team repository. The lab number is not recorded in it.',
      },
    ],
    other: [
      {
        slug: 'exercises',
        title: 'In-class exercises',
        items: [
          {
            slug: 'exercise-1',
            number: '1',
            name: 'Exercise 1: Vehicle Hierarchy',
            objective: 'Design a class hierarchy with an interface.',
            implementation: ['Vehicle base class with LandVehicle and AirVehicle branches, Car, Bike, Plane and Helicopter, a Printable interface and a test driver'],
            tools: ['Java'],
          },
          {
            slug: 'exercise-2',
            number: '2',
            name: 'Exercise 2: Event Handlers',
            objective: 'Use an interface to process events polymorphically.',
            implementation: ['EventHandler interface with Logger, Alerter and Notifier implementations applied to prioritized events'],
            tools: ['Java'],
          },
          {
            slug: 'exercise-3',
            number: '3',
            name: 'Exercise 3: Sorting Students',
            objective: 'Sort objects with different comparison strategies.',
            implementation: ['Student class with comparators by last name and by average grade, and a demo program'],
            tools: ['Java'],
          },
        ],
      },
    ],
  },

  {
    code: 'ITI1100',
    name: 'Digital Systems I',
    topics: [
      'Number systems and conversions',
      'Boolean algebra and logic gates',
      'Karnaugh maps and logic minimization',
      'Combinational circuits: decoders, multiplexers, adders',
      'Latches and flip-flops',
      'Sequential circuit analysis and state diagrams',
      'Counters and registers',
    ],
    concepts: ['SOP and POS forms', 'NAND-only implementation', "Two's complement arithmetic and overflow", 'Edge triggering'],
    skills: ['Quartus II schematic design', 'Testing circuits on an FPGA board', 'Writing lab reports'],
    summary:
      'Six hardware labs, done as Group 33 and written up as lab reports, plus written assignments on number systems, logic design and sequential circuits.',
    assignments: [
      { slug: 'assignment-1', number: '1', name: 'Assignment 1: Number Systems', objective: 'Convert numbers between bases.', implementation: ['Hand-worked conversions between decimal, binary, octal, hexadecimal and other bases'] },
      { slug: 'assignment-2', number: '2', name: 'Assignment 2: Truth Tables and Boolean Algebra', implementation: ['Truth tables and Boolean expressions worked by hand'] },
      { slug: 'assignment-3', number: '3', name: 'Assignment 3: Gate-Level Implementation', implementation: ['Simplified a four-variable Boolean function and drew its logic circuit'], note: 'Assignment number inferred from submission order; the file is an unlabelled scan.' },
      { slug: 'assignment-4', number: '4', name: 'Assignment 4: Combinational Logic', implementation: ['Truth tables, K-map simplification and circuits for textbook chapter 4 problems'], note: 'Assignment number inferred from submission order and chapter numbering; the file is an unlabelled scan.' },
      { slug: 'assignment-5', number: '5', name: 'Assignment 5: Sequential Circuits', implementation: ['Flip-flop circuits, state tables and state diagrams for textbook chapter 5 problems'] },
      { slug: 'assignment-6', number: '6', name: 'Assignment 6: Counters and Registers', implementation: ['Counter design with flip-flop excitation tables and simplified input equations for textbook chapter 6 problems'] },
    ],
    labs: [
      {
        slug: 'lab-1', number: '1', name: 'Lab 1: Logic Gates',
        objective: 'Construct simple combinational logic circuits from schematics and determine how they work experimentally.',
        concepts: ['Basic gates', 'Truth tables', 'Equivalent gate configurations'],
        tools: ['Quartus II 13.0 SP1', 'Altera DE2-115 board'],
        procedure: ['Built one-chip and two-chip logic circuits in Quartus', 'Programmed the DE2-115 and set inputs with its switches', 'Recorded truth tables and compared them with predictions'],
        results: 'The observed outputs matched the expected truth tables in every case.',
        work: ['Co-authored the group lab report'],
      },
      {
        slug: 'lab-2', number: '2', name: 'Lab 2: Boolean Logic',
        objective: 'Simplify logic functions and implement minimized circuits, including NAND-only designs.',
        concepts: ['Boolean algebra', 'K-maps', 'SOP and POS forms', 'NAND-only implementation'],
        tools: ['Quartus II 13.0 SP1', 'Altera DE2-115 board'],
        results: 'The simplified circuits, including the POS and SOP forms, matched their theoretical predictions.',
        work: ['Co-authored the group lab report'],
      },
      {
        slug: 'lab-3', number: '3', name: 'Lab 3: Decoders, Displays and Multiplexers',
        objective: 'Build and test a 2-to-4 decoder, a seven-segment display decoder and a multiplexer.',
        concepts: ['Decoders', 'Seven-segment displays', '4-to-1 multiplexers'],
        tools: ['Quartus II 13.0 SP1', 'Altera DE2-115 board'],
        results: 'Experimental results supported the predictions for all three circuits.',
        work: ['Co-authored the group lab report'],
      },
      {
        slug: 'lab-4', number: '4', name: 'Lab 4: Adders and Subtractors',
        objective: 'Build a full adder, use it in an 8-bit adder/subtractor with a hierarchical design, and add an overflow detector.',
        concepts: ['Half and full adders', 'Parallel adders', "Two's complement subtraction", 'Overflow detection', 'Hierarchical design'],
        tools: ['Quartus II 13.0 SP1', 'DE2-115 board'],
        results: 'Measured sums and carries matched binary addition for each test case.',
        work: ['Co-authored the group lab report'],
      },
      {
        slug: 'lab-5', number: '5', name: 'Lab 5: Latches and Flip-Flops',
        objective: 'Build latches and flip-flops from basic gates and explore latching and edge triggering.',
        concepts: ['SR latch', 'D and T flip-flops', 'Edge triggering', 'Clock inputs'],
        tools: ['Quartus II 13.0 SP1', 'Altera DE2-115 board'],
        work: ['Co-authored the group lab report'],
      },
      {
        slug: 'lab-6', number: '6', name: 'Lab 6: Synchronous Counters',
        objective: 'Design, simulate and test synchronous counters, displaying their outputs on LEDs.',
        concepts: ['Synchronous counters', 'State tables', 'Waveform simulation'],
        tools: ['Quartus II 13.0 SP1', 'Altera DE2-115 board'],
        note: 'The copy of this report on file carries a document-sharing site watermark; confirm it is the group\'s own report.',
      },
    ],
  },

  {
    code: 'CSI2110',
    name: 'Data Structures and Algorithms',
    topics: [
      'Linear structures: arrays, linked lists, stacks, queues, deques, iterators',
      'Priority queues and heaps',
      'Maps, hash tables, skip lists and sets',
      'Binary search trees, AVL trees, splay trees, (2,4) trees and red-black trees',
      'Sorting, divide-and-conquer and heap-sort',
      'Text processing and pattern matching',
      'Graphs, DFS, BFS and shortest paths',
    ],
    concepts: ['Asymptotic analysis of ADT operations', 'Array-based heap representation', 'Graph traversal and reachability'],
    skills: ['Java', 'Implementing and comparing ADT implementations', 'Complexity analysis'],
    summary: 'Five labs implementing and comparing linear structures, priority queues, sorting algorithms and graph algorithms in Java.',
    labs: [
      {
        slug: 'lab-1', number: '1', name: 'Lab 1: Integer Sequences',
        concepts: ['Array-based and linked sequences', 'Singly, doubly and circular linked lists', 'Recursion'],
        tools: ['Java'],
        work: ['ArrayIntegerSequence, LinkedIntegerSequence, DoublyIntegerList and CircularIntegerList behind an IntegerSequence interface, with a driver'],
      },
      {
        slug: 'lab-2', number: '2', name: 'Lab 2: Stacks, Queues, Deques, Lists and Iterators',
        objective: 'Implement and compare linear ADTs (textbook chapters 6-7).',
        concepts: ['Stack and queue ADTs', 'Circular array queues'],
        tools: ['Java'],
        work: ['ArrayStack and CircularArrayQueue, used in a ticket-processing example'],
      },
      {
        slug: 'lab-3', number: '3', name: 'Lab 3: Priority Queues, Heaps and Maps',
        objective: 'Implement and compare non-linear and associative structures (textbook chapters 9-11).',
        concepts: ['Priority queue ADT', 'Heap-order property', 'Up-heap and down-heap'],
        tools: ['Java'],
        work: [
          'ListPriorityQueue and HeapPriorityQueue behind a PriorityQueue interface, with a tester',
          'Written report explaining priority queues and heaps and comparing their complexity',
        ],
        results:
          'The report shows that an unsorted-list priority queue inserts in O(1) but needs O(n) for min and removeMin, while a heap gives O(log n) insert and removeMin and O(1) min, because the minimum is always at the root and down-heap follows the tree height.',
      },
      {
        slug: 'lab-4', number: '4', name: 'Lab 4: Sorting Algorithms',
        objective: 'Implement, test and compare sorting algorithms (textbook chapters 12-13).',
        concepts: ['Insertion sort', 'Merge sort', 'Divide and conquer'],
        tools: ['Java'],
        work: ['SimpleSort (insertion sort) and MergeSort on StudentRecord arrays'],
      },
      {
        slug: 'lab-5', number: '5', name: 'Lab 5: MiniMap Route Planner (group)',
        objective: "Build a graph-based route planner with traversals, Dijkstra's algorithm and Bellman-Ford.",
        concepts: ['Graph ADT', 'Adjacency lists', 'Weighted edges', 'BFS reachability', 'DFS cycle detection'],
        tools: ['Java', 'Graphviz'],
        work: ['AdjacencyListGraph, BreadthFirstSearch, DepthFirstSearch, WeightedEdge and Location classes, plus a GraphApp driver'],
        note: 'Group lab. The files on record cover the graph structure and traversals.',
      },
    ],
  },
  {
    code: 'SEG3125',
    name: 'Analysis and Design of User Interfaces',
    topics: [
      'UI/UX and visual communication',
      'User-centred design and prototyping',
      'Goal-oriented interaction and design patterns',
      'Human cognition: attention, memory, perception',
      'System image, interactive processes and learnability',
      'Conversation design',
      'Usability heuristics',
      'Visualization and internationalization',
      'Evaluation methods',
    ],
    concepts: ['Visual hierarchy', 'Faceted search', 'Multi-step flows with progress indicators', 'Localization'],
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Bootstrap', 'Recharts', 'Figma prototyping', 'GitHub Pages hosting'],
    summary:
      'Five design assignments, each built, hosted and linked from a course portfolio. Every assignment has a public repository and a live demo.',
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
    topics: [
      'Writing good requirements and specifications',
      'Requirements engineering basics',
      'Non-functional requirements (conventional and contemporary)',
      'Elicitation, brainstorming, questionnaires and prototyping',
      'Prioritization with MoSCoW',
    ],
    concepts: ['Stakeholder analysis', 'Requirements traceability', 'Testable, unambiguous requirement statements'],
    skills: ['Requirements documentation', 'LaTeX'],
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
    topics: [
      'Introduction to software design and architecture',
      'Domain-driven design: strategic and tactical design',
      'Contracts and use case realization',
      'Structure and behaviour design',
      'From design to architecture',
    ],
    concepts: ['Core, supporting and generic subdomains', 'Bounded contexts', 'Operation contracts'],
    skills: ['Angular', 'TypeScript', 'Kotlin', 'Spring Boot', 'Gradle'],
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
    other: [
      {
        slug: 'project',
        title: 'Term project',
        items: [
          {
            slug: 'car-hms',
            name: 'CAR-HMS: Cairn Hiking Event Management System (Group 5)',
            objective: 'Design and build a system for a hiking club to schedule hikes, match members to hikes by skill level, and manage sign-ups and waitlists.',
            problem:
              "The club runs hikes in Gatineau Park, the Greenbelt and Ottawa's urban lands. Organizers may only create hikes on NCC trails where hiking is permitted and within each trail's open season.",
            tools: ['Kotlin', 'Spring Boot', 'Angular', 'TypeScript', 'Cucumber'],
            implementation: ['Deliverable 1: initial domain analysis and high-level domain model'],
            note: 'Group project in progress; the repository belongs to the course organization.',
          },
        ],
      },
    ],
  },
];
