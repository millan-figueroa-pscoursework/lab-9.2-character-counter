### Lab 9.2: Props and State

# Character Counter App

A simple React app that counts characters and words in real time, calculates reading time, and shows progress toward a word goal.

## 📖 Learning Objectives

- Implement state management using the useState hook.
- Create and handle user events effectively.
- Build components that update their UI based on state changes.
- Implement the callback pattern for component communication.
- Create a responsive and user-friendly interface.

## 🤯 Features

- Live character and word count

- Estimated reading time based on 200 words per minute

- Progress bar for word goals (min and max)

- Responsive and clean UI

## 📱 Components

<b>CharacterCounter</b> – handles all the logic and state management, including updating the text, calculating word and character counts, and determining reading time. It focuses on data and passes results to child components without handling any UI styling directly.<br>

<b>TextInput</b> – is a simple UI component that renders the text area and reports any text changes back to the parent component. It doesn’t perform calculations or store data; it only handles user input.<br>

<b>StatsDisplay</b> – is responsible for presenting the calculated statistics, including character count, word count, reading time, and progress indicators. It focuses entirely on visual output and displaying feedback based on the data received from CharacterCounter.<br>

## 🔧 Built With

- <b>React</b> – component-based UI framework

- <b>TypeScript</b> – for type safety and cleaner code

- <b>Tailwind CSS</b> – for fast, utility-first styling

- <b>Vite</b> – for lightning-fast development and builds

## 💭 Reflection Questions

#### How did you handle state updates when the text changed?

I handled state updates by using the useState hook so that every time the text changed it updated the state and re-rendered the component automatically.

#### What considerations did you make when calculating reading time?

When calculating reading time I considered the average reading speed of about 200 words per minute and divided the total word count by that number to get an estimated time in minutes.

#### How did you ensure the UI remained responsive during rapid text input?

I kept the UI responsive during rapid typing by using simple calculations inside the component without any heavy loops or extra renders so React could handle updates smoothly.

#### What challenges did you face when implementing the statistics calculations?

A big challenge was getting the wordCounter function right because the split method splits text based on what you put inside the quotes and I originally used split("") which split the text by chars not words, so I had to add a space between the quotes to get a words array. I also used to filter method to filter out spaces and handle whitespace correctly. It was also really important to divide the logic and UI between the three components so that each one had a clear purpose. I ended up moving the progress bar and the word goal messages from CharacterCounter to StatsDisplay because it made more sense for the display component to handle visual elements while CharacterCounter focused only on logic and state.
