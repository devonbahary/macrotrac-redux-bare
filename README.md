# Macrotrac (Redux Prototype)
> A nutrition tracker to help you meet your daily macronutrient ratio goals.

The app is divided into a few sections:
  - **User:** set calorie and macronutrient goals
  - **Add Food:** create and save a list of foods you frequently eat
  - **Foods:** display your saved foods to make changes
  - **Meals:** record the meals you eat throughout the day from your list of saved foods and view your progress towards your goals

(* As a prototype, the app features minimal styling.)

## The Technical Stuff

### Redux Prototype
This is the first iteration of a previously built **React** app that features **Redux**!

### Redux has helped solve a lot of state management headaches
> In the previous iteration, Macrotrac had a lot of state that had to be shared between different components:

- App (common state)
  - Meals
  - Foods
  - User

**Meals** derived its options from **Foods** and needed to know the **User's** goals.

To be able to pass along all this data, *I kept most of the state in the **App** component*, including functions to respond to **each case** of data changing in **each component**.

> The **App** parent component was extremely burdened.

Not only that, but the diagram above is greatly simplified. In reality, the component heirarchy was something like:

- App (has **data A** | **data B**)
  - Meals (passes **data A**)
    - ... (passes **data A**)
      - ...
      - ... (passes **data A**)
        - ... (needs **data A**)
  - Foods (passes **data B**)
    - ... (passes **data B**)
      - ...
      - ... (passes **data B**)
        - ... (needs **data B**)
      - ...
  - ...

I think even this more accurate diagram doesn't show how much **distance** in the component hierarchy there was **between the data and the components** that used them.

> The **design flaw** here was that so much of the relevant shared data had to be passed down through components that **didn't need to know anything about the data** just to get to the child components that actually had use for them.

This harmed the React principles of **component reusability**: if I made a change in component organization, I had to *rewire all the props* that were being passed through the hierarchy.

### The Redux Solution
Alright, so was it a walk in the park to learn?

Ehh some things have been easier, but I learned a lot of cool ES6 features in the process and now I'm actually excited to tackle complex state challenges **thanks to Redux**!

This is how my app has changed:

- Provider (**store** has **data A** | **data B**)
  - App
    - Meals
      - ...
        - ...
        - ...
          - ... (connects to **data A**)
    - Foods
      - ...
        - ...
        - ...
          - ... (connects to **data B**)
        - ...
    - User

Except **now**, when a component needs **data A** or **data B**, all I have to do is `connect` that component to the **store**, passing along the **store state** as **props** to that component. The components in between don't need to get involved whatsoever.

If a component needs to call functions to change state, that component gets `connect`ed and **actions** are imported to be called (**dispatched**) and then interpreted by **reducers** that handle the change in state.

**Thank you, Redux!**
