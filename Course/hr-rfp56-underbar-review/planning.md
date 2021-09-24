# Document your thoughts and process here

[How to use this file](https://learn-2.galvanize.com/content_link/github.com/gSchool/docs.student-wiki/reading/Sprint-Planning.md)

## This is where you improve your process...
-  Collect your thoughts
-  Think step by step
-  Decompose the problem
-  Take notes and write questions for now and later

"What's the smallest thing I can do right now to take one step forward?"

> "...Computer scientists take care to distinguish between “process” and “outcome.” If you followed the best possible process, then you've done all you can, and you shouldn’t blame yourself if things didn’t go your way."
> - Brian Christian, Algorithms to Live By: The Computer Science of Human Decisions

- [x] Be AWESOME! 🤩
  - [x] Example Checkboxes!
  - [x] Divide and conquer the exercise.
  - [x] Read the test code.
  - [x] Take Breaks 🥰
- [ ] TODO prompt from sprint...
  - [x] Start dividing the work
  - [x] Take the existing code and fill it out
  - [x] Switch off with pair programming
  - [x] fill out test cases
  - [x] filled out the extra test cases
  - []  plan to work on other items
  - []  work on advanced items
  - []  work on nightmare


# Advanced Content
 - [x] Ensure the tests for all previously solved functions (italicized above) are fixed
- [x] Use checkForNativeMethods to write a test for each function that will fail if a built-in Array function is used
# Implement the following functions:

  - [] invoke
  - [] sortBy
  - [] zip
  - [] flatten
  - [] intersection
  - [] difference
  - [] throttle

## Throttle
There's one function that is a little more complicated, so we've included some more context to help you along.

_.throttle(func, wait): Wrap a function func so that it can be called at most once within a period of wait milliseconds. This is useful for throttling access to expensive APIs or to drawing routines in a video game. Let's see how it's used:

var counter = 0;
var increment = function() {
  return counter += 1;
};

// Create a function called throttledIncrement. This function can be called at
// most once every 100ms
var throttledIncrement = _.throttle(increment, 100);

throttledIncrement(); // return 1; `counter` should now be 1
throttledIncrement(); // return 1; schedule `increment()` call in 100ms
throttledIncrement(); // return 1; should do nothing

// Wait 100 ms; `increment` is called
Arguments passed to the throttled function should be passed to the original function.
The throttled function should always return the most recently returned value of the original function.
If the wait period is 100ms and the function was last called 30ms ago, another call to the throttled function should schedule a call for 0ms after the wait period is over.
