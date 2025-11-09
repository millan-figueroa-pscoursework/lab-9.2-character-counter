# Lab 9.2: Props and State

## Component Requirements

- [x] Create a TextInput component that handles user input and communicates changes to its parent.
- [x] Create a StatsDisplay component that shows various statistics about the text.
- [x] Create a CharacterCounter component that combines the above components and manages the state.

## Activity Tasks

### Component Implementation:

- [x] Implement each component according to its interface requirements.
- [x] Use useState to manage text input and statistics.
- [x] Implement event handlers for text changes.
- [ ] Calculate statistics in real-time.

### State Management:

- [x] Track the current text input.
- [x] Calculate and update statistics when text changes.
- [x] Handle edge cases (empty input, very long text).

### Create a responsive layout.

- [x] Show visual feedback for statistics.
- [ ] Implement progress indicators for word count goals.

### Component Communication:

- [x] Use callbacks to pass data between components.
- [x] Ensure proper prop typing.
- [x] Handle optional props appropriately.

## Reflection Questions

- #### How did you handle state updates when the text changed?
  I handled state updates by using the useState hook so that every time the text changed it updated the state and re-rendered the component automatically.
- #### What considerations did you make when calculating reading time?
  When calculating reading time I considered the average reading speed of about 200 words per minute and divided the total word count by that number to get an estimated time in minutes.
- #### How did you ensure the UI remained responsive during rapid text input?
  I kept the UI responsive during rapid typing by using simple calculations inside the component without any heavy loops or extra renders so React could handle updates smoothly.
- #### What challenges did you face when implementing the statistics calculations?
  A big challenge was getting the wordCounter function right because the split method splits text based on what you put inside the quotes and I originally used split("") which split the text by chars not words, so I had to add a space between the quotes to get a words array. I also used to filter method to filter out spaces and handle whitespace correctly. It was also really important to divide the logic and UI between the three components so that each one had a clear purpose. I ended up moving the progress bar and the word goal messages from CharacterCounter to StatsDisplay because it made more sense for the display component to handle visual elements while CharacterCounter focused only on logic and state.

## Submission

Submit your project via a GitHub repository using the Start Assignment link on Canvas. Your submission should include:

- [x] All component implementations
- [x] Example usage with documentation
- [x] A README.md file explaining how to use the components
