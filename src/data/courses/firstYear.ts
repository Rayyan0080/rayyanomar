/** First-year courses (ITI1120, ITI1121). */
import type { Course } from '../../types';
import { GH, py, iti } from './links';

export const firstYear: Course[] = [
  {
    code: 'ITI1120',
    name: 'Introduction to Computing I',
    description:
      'Introduces the logic of computing: developing algorithms that describe the solution to a problem and implementing them in a scripting language (Python). Covers computer programs, the software development process, data and variables, program logic, procedures and linear data structures.',
    descriptionSource: 'ITI1120 course information sheet',
    concepts: ['Algorithm design and problem decomposition', 'Functions, conditionals and loops', 'Strings, lists and 2D lists', 'Dictionaries and file input', 'Searching, sorting and their efficiency', 'Exception handling', 'Objects and classes'],
    specs: ['Language: Python 3, standard library only', 'Tools: IDLE, Google Colab', 'Coursework: 4 assignments and 9 labs, about 3,400 lines of Python'],
    links: [{ label: 'Repository', href: `${GH}/phythone-coursework` }],
    assignments: [
      {
        slug: 'assignment-2', concepts: ['Functions with parameters and return values', 'if / elif / else branching', 'User input and output formatting', 'Quadratic formula and logarithms with the math module', 'Random question generation'], specs: ['Language: Python 3 (standard library only)', '2 source files (Part 1 and Part 2), about 155 lines', 'Modules: random, math', 'Console program driven by input() prompts'],
        number: '2',
        name: 'Assignment 2: Quiz Programs and Utility Functions',
        objective: 'Practise functions, conditionals and user interaction in Python.',
        problem:
          'Part 1: an interactive program that welcomes a student and runs an elementary-school quiz (exponents and logarithms) or a high-school quiz (solving quadratic equations). Part 2: a set of independent functions.',
        tools: ['Python 3', 'IDLE'],
        links: py('Asing/Assignment 2'),
      },
      {
        slug: 'assignment-3', concepts: ['for and while loops', 'String slicing and indexing', 'Character-by-character processing without built-in string methods', 'Number sequences (Pell numbers, divisor sums)'], specs: ['Language: Python 3 (standard library only)', 'Part 1 and Part 2 submitted as Python source saved as .txt files', 'Console program and standalone functions'],
        number: '3',
        name: 'Assignment 3: Number and String Processing',
        objective: 'Practise loops and string manipulation, including solutions that avoid built-in string methods.',
        problem:
          'Part 1: split a number string into equal pieces and test whether the pieces increase. Part 2: ten separate functions on numbers and strings.',
        tools: ['Python 3'],
        links: py('Asing/a3_300434818'),
      },
      {
        slug: 'assignment-4', concepts: ['List traversal and counting', 'Run detection in lists', 'File reading and data cleaning', 'Game state held in lists', 'Input validation loops'], specs: ['Language: Python 3 (standard library only)', '5 source files (four Part 1 questions and the card game), about 214 lines', 'Module: random (deck shuffling)', 'Text-based game loop with validated console input'],
        number: '4',
        name: 'Assignment 4: List Algorithms and a Card Game',
        objective: 'Work with lists and files, and build a complete text-based game.',
        problem:
          'Part 1: four list-processing questions. Part 2: a two-player card game against a computer dealer in which matching pairs are discarded.',
        tools: ['Python 3'],
        links: py('Asing/Assignment 4'),
      },
      {
        slug: 'assignment-5', concepts: ['Adjacency lists (list of lists) for a social graph', 'File parsing with error handling for missing files', 'Statistics (maximum, average)', 'Recommendation by counting common friends'], specs: ['Language: Python 3 (standard library only)', '1 source file, about 140 lines', 'Reads a network file of users and friendships', 'Interactive menu in main()'],
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
      { slug: 'lab-1', concepts: ['Writing and running a first program', 'Turtle graphics', 'Block-based programming'], specs: ['Language: Python 3 (standard library only)', '5 source files, about 144 lines', 'Module: turtle (graphics)', 'Blockly puzzle solutions included'], number: '1', name: 'Lab 1: Introduction to the Lab Environment', objective: 'Get set up in the lab environment and run first Python programs.', tools: ['Python 3', 'IDLE', 'turtle module', 'Blockly'], links: py('Lab/lab1-solutions/lab1-solutions') },
      { slug: 'lab-2', concepts: ['Operators and precedence', 'Integer vs float division', 'The math module'], specs: ['Python interpreter (IDLE shell)', 'Solutions as two PDF task sheets'], number: '2', name: 'Lab 2: Evaluating Expressions', objective: 'Predict the value of Python expressions, then check them in the interpreter and explain any differences.', tools: ['Python interpreter'], links: py('Lab/lab2-Solutions1/lab2-Solutions') },
      { slug: 'lab-3', objective: 'Small Python programs built around functions and conditionals: divisibility tests, pay and letter-grade calculators, rock-paper-scissors, roots of a quadratic, and day-of-week information.', specs: ['Language: Python 3 (standard library only)', '7 source files, about 188 lines', 'Module: math'], number: '3', name: 'Lab 3: Functions and Conditionals', concepts: ['Defining functions', 'if / elif / else', 'Divisibility tests'], tools: ['Python 3'], links: py('Lab/Lab3-solutions1/Lab3-solutions') },
      { slug: 'lab-5', objective: 'Loop practice through short functions: checking whether a list is sorted, testing perfect numbers, summing and multiplying odd numbers, and summing lists in two different ways.', specs: ['Language: Python 3 (standard library only)', '9 source files, about 177 lines', 'Module: math'], number: '5', name: 'Lab 5: Loops and Functions', concepts: ['for loops', 'Tracing loop execution', 'Functions such as is_sorted and perfect-number tests'], tools: ['Python 3'], links: py('Lab/lab5-solutions/lab5-solutions') },
      { slug: 'lab-6', objective: 'while and for loops over lists: prime testing (a correct and a deliberately wrong version), first negative value, inner product, Fibonacci numbers, minimums, and building lists in various ways.', specs: ['Language: Python 3 (standard library only)', '13 source files, about 366 lines', 'Module: random'], number: '6', name: 'Lab 6: while Loops and Lists', concepts: ['while loops', 'Creating and modifying lists', 'Prime testing'], tools: ['Python 3'], links: py('Lab/lab6-solutions/lab6-solutions') },
      { slug: 'lab-7', objective: 'List-processing functions: indexes and doubles, intersections and subsets, pairs that sum to a target, maximum-sum sublists, and counting inversions.', concepts: ['Lists and list methods', 'Functions over lists'], specs: ['Language: Python 3 (standard library only)', '1 source file, about 130 lines'], number: '7', name: 'Lab 7', tools: ['Python 3'], links: py('Lab/lab7_solutions.py') },
      { slug: 'lab-8', objective: '2D lists as matrices (dimensions, column sums, diagonal sums, row maximums), a magic-square checker, moving zeros in place and with an extra list, and reading text files such as a periodic table and a news article.', specs: ['Language: Python 3 (standard library only)', '11 source files, about 693 lines', 'Reads and writes text files'], number: '8', name: 'Lab 8: 2D Lists, Matrices and Files', concepts: ['2D lists and matrices', 'Magic squares', 'Reading text files', 'In-place list algorithms'], tools: ['Python 3'], links: py('Lab/lab8-solutions/lab8-solutions') },
      { slug: 'lab-9', objective: 'Dictionaries and searching: linear search in three versions, binary search, selection and insertion sort with timing, element uniqueness and majority checks, and try/except error handling.', specs: ['Language: Python 3 (standard library only)', '13 source files, about 683 lines', 'Modules: time (timing searches and sorts), random'], number: '9', name: 'Lab 9: Dictionaries, Searching and Sorting', concepts: ['Dictionaries', 'Linear and binary search', 'Selection sort', 'Algorithm efficiency', 'Exception handling'], tools: ['Python 3'], links: py('Lab/lab9-solutions/lab9-solutions') },
      { slug: 'lab-10', objective: 'Object-oriented Python: Point, Card and Deck, BankAccount, Queue and Vector classes, plus Animal/Bird and Marsupial/Kangaroo inheritance examples.', specs: ['Language: Python 3 (standard library only)', '8 source files, about 511 lines', 'Modules: random, math'], number: '10', name: 'Lab 10: Objects', concepts: ['Classes and objects', 'Methods and attributes'], tools: ['Python 3'], links: py('Lab/lab10-solutions/lab10-solutions') },
    ],
  },
  {
    code: 'ITI1121',
    name: 'Introduction to Computing II',
    description:
      'Object-oriented programming and abstraction, including information hiding and encapsulation. Linked lists, stacks, queues and binary search trees, with iterative and recursive processing of data structures. Prerequisite: ITI 1120.',
    descriptionSource: 'uOttawa course catalogue (summarized)',
    concepts: ['Object-oriented design: encapsulation, interfaces, inheritance, abstract classes', 'Generics', 'Stacks, queues and linked lists', 'Iterators and recursion', 'Exceptions', 'Comparators and sorting', 'Discrete-event simulation'],
    specs: ['Language: Java, JDK standard library only', 'Coursework: 4 assignments and 11 labs, about 4,500 lines of Java', 'Programs run from the command line through main methods'],
    links: [{ label: 'Repository', href: `${GH}/ITI1121` }],
    assignments: [
      {
        slug: 'assignment-1', concepts: ['Classes and objects (Car, ParkingLot)', '2D arrays for the lot layout', 'File parsing with java.io.File and Scanner', 'Enums for car types and rule checks'], specs: ['Language: Java (JDK standard library)', '5 source files, about 323 lines', 'Entry point: ParkingLot.main', 'Input: parking lot design and occupancy file read with Scanner'], number: '1', name: 'Assignment 1: Parking Lot',
        objective: 'This assignment implements a simple parking lot system that reads a parking configuration and occupancy file, then manages vehicle parking and removal according to parking rules. It emphasizes file-based input, object modeling, and lot-management logic.',
        output: ['Parking status after each operation', 'Lot occupancy and spot availability', 'Whether a car can park or must leave because of rules'],
        links: iti('Asing/a1_300434818'),
      },
      {
        slug: 'assignment-2', concepts: ['Discrete-event simulation', 'Queue ADT (linked queue)', 'Probability distributions', 'Encapsulated Spot and ParkingLot classes'], specs: ['Language: Java (JDK standard library)', '12 source files, about 784 lines', 'Entry point: Simulator.main', 'java.util.Random for arrivals; triangular distribution for departures'], number: '2', name: 'Assignment 2: Parking Lot Simulator',
        objective: 'This assignment builds a simulation of a parking lot with queues, random arrivals, and probabilistic departures. It models how cars arrive over time and how they are assigned to parking spots or wait in line if the lot is full.',
        output: ['Simulation logs of car arrivals and departures', 'Queue length over time', 'Parking occupancy statistics', 'Simulation summary of lot usage'],
        links: iti('Asing/a2_300434818'),
      },
      {
        slug: 'assignment-3', concepts: ['Search for the minimum capacity', 'Averaging over repeated simulations', 'Exception handling and argument validation', 'Linked queues'], specs: ['Language: Java (JDK standard library)', '13 source files, about 660 lines', 'Entry point: CapacityOptimizer.main (arrival rate as a command-line argument)', 'Runs 10 simulations per candidate lot size and times each run'], number: '3', name: 'Assignment 3: Capacity Optimizer',
        objective: 'This assignment goes a step further by computing the minimum number of parking spots needed to reduce excessive queue buildup. It tests a capacity model using hourly arrival patterns and departure probabilities.',
        output: ['Recommended capacity', 'Queue analysis', 'Lot performance summary', 'Simulation results for different conditions'],
        links: iti('Asing/a3_300434818'),
      },
      {
        slug: 'assignment-4', concepts: ['Custom string buffer with a growing char array', 'Linked lists and iterators', 'Recursion over linked structures'], specs: ['Language: Java (JDK standard library)', '15 source files across Q1, Q2 and Q3, about 731 lines', 'Entry points: Q1, Q2 and Q3 test classes'], number: '4', name: 'Assignment 4: String Buffer, Iterators and Recursion',
        objective: 'This assignment focuses on custom data structures and algorithmic processing. It includes an ITIStringBuffer implementation, linked-list behavior, iteration, and recursive list processing.',
        output: ['Modified string content and buffer operations', 'List traversal and iteration results', 'Recursively processed list data'],
        links: iti('Asing/a4_300434818'),
      },
    ],
    labs: [
      { slug: 'lab-1', concepts: ['Arrays', 'Static methods', 'Averages, insertion and reverse sorting', 'Reading console input'], specs: ['Language: Java (JDK standard library)', '6 source files, about 152 lines', 'Six standalone programs, each with a main method', 'java.util.Scanner, java.util.Arrays'], number: '1', name: 'Lab 1: Java Arrays and Methods', objective: 'This lab covers basic Java array operations, including array insertion, average calculation, reverse sorting, and a few demonstration programs.', output: ['Array contents before and after processing', 'Average and sorted values', 'Reversed and inserted arrays'], links: iti('Lab/lab1_300434818') },
      { slug: 'lab-2', concepts: ['Classes and constructors', 'Object equality', 'Encapsulated state'], specs: ['Language: Java (JDK standard library)', '2 source files, about 70 lines'], number: '2', name: 'Lab 2: Combinations and a Door Lock', objective: 'This lab includes combinatorics and a door-lock simulation/probability exercise. It introduces logic-based problem solving and constrained decision-making.', output: ['Combinations or valid configurations', 'Door-lock outcomes or access states'], links: iti('Lab/lab2_300434818') },
      { slug: 'lab-3', concepts: ['Immutable value objects', 'equals and compareTo', 'Greatest common divisor for simplifying fractions'], specs: ['Language: Java (JDK standard library)', '2 source files, about 189 lines'], number: '3', name: 'Lab 3: Rational Numbers', objective: 'This lab introduces rational numbers and helper utilities for fraction arithmetic. It focuses on math operations with numerators and denominators.', output: ['Rational arithmetic results', 'Simplified fractions', 'Utility-generated numeric outputs'], links: iti('Lab/lab3_300434818') },
      { slug: 'lab-4', concepts: ['Interfaces', 'Inheritance', 'Polymorphism'], specs: ['Language: Java (JDK standard library)', '5 source files, about 139 lines', 'java.util.Date and Calendar for post timestamps'], number: '4', name: 'Lab 4: News Feed', objective: 'This lab models a social media/news feed application using interfaces and posts. It includes likeable posts, text posts, photo posts, and a feed manager.', output: ['News feed entries', 'Post content with likes', 'Feed updates and ordering'], links: iti('Lab/lab4_300434818') },
      { slug: 'lab-5', concepts: ['Abstract classes', 'Comparator', 'Sequences'], specs: ['Language: Java (JDK standard library)', '7 source files, about 102 lines', 'java.util.Comparator, Collections.sort, ArrayList'], number: '5', name: 'Lab 5: Books, Libraries and Series', objective: 'This lab introduces books, libraries, and numeric series. It includes abstract series classes for arithmetic and geometric sequences, plus library ordering and comparison logic.', output: ['Book catalogs', 'Sorted or compared records', 'Series values and totals'], links: iti('Lab/lab5_300434818') },
      { slug: 'lab-6', concepts: ['Generics', 'Array-based stacks', 'Dynamic resizing', 'Map ADT'], specs: ['Language: Java (JDK standard library)', '6 source files, about 223 lines'], number: '6', name: 'Lab 6: Stacks and Dictionaries', objective: 'This lab focuses on stacks, dictionaries, maps, and key-value pairs. It teaches generic data structures and their applications.', output: ['Stack push/pop results', 'Dictionary lookups and mappings', 'Pair structure usage'], links: iti('Lab/lab6_300434818') },
      { slug: 'lab-7', concepts: ['Checked and unchecked exceptions', 'Custom exception classes', 'try / catch / finally'], specs: ['Language: Java (JDK standard library)', '10 source files, about 403 lines', 'Entry point: Exercise1.main'], number: '7', name: 'Lab 7: Exceptions', objective: 'This lab builds on stack concepts and adds banking/account logic with exception handling, including insufficient funds and stack overflow cases.', output: ['Deposit and withdrawal activity', 'Stack exceptions', 'Account state updates'], links: iti('Lab/lab7_300434818') },
      { slug: 'lab-8', concepts: ['Queue ADT', 'Circular array queues', 'Simulation'], specs: ['Language: Java (JDK standard library)', '4 source files, about 172 lines', 'java.util.Random for customer arrivals'], number: '8', name: 'Lab 8: Queues and Simulation', objective: 'This lab focuses on queues and customer service simulation. It models a cashier line and queue processing behavior.', output: ['Queue states', 'Customer processing order', 'Cashier service summary'], links: iti('Lab/lab8_300434818') },
      { slug: 'lab-9', concepts: ['Dynamic arrays', 'Comparators', 'File input'], specs: ['Language: Java (JDK standard library)', '6 source files, about 257 lines', 'Entry point: SecretMessage.main', 'Reads songs from a file with StringTokenizer'], number: '9', name: 'Lab 9: Playlists and Sorting', objective: 'This lab works with sorting, playlists, and secret message handling. It covers custom comparators and collection ordering.', output: ['Playlist sorted by title/artist/album', 'Decoded or transformed secret message'], links: iti('Lab/lab9_300434818') },
      { slug: 'lab-10', concepts: ['Linked lists', 'Ordered insertion', 'Merging'], specs: ['Language: Java (JDK standard library)', '2 source files, about 135 lines'], number: '10', name: 'Lab 10: Ordered Lists', objective: 'This lab covers ordered structures and ordered lists, introducing sorted container behavior and ordered data management.', output: ['Inserted values in sorted order', 'Ordered list operations', 'Structure traversal results'], links: iti('Lab/lab10_300434818 (2)/lab10_300434818') },
      { slug: 'lab-11', concepts: ['Iterators', 'Inner classes', 'Bitwise operations'], specs: ['Language: Java (JDK standard library)', '3 source files, about 193 lines'], number: '11', name: 'Lab 11: Iterators and Bit Lists', objective: 'This lab introduces bit lists and iterative processes, with iterator support and bit-level operations.', output: ['Bit values and set/clear operations', 'Iterator traversal through data', 'Iterative algorithm results'], links: iti('Lab/lab11_300434818') },
    ],
  },
];
