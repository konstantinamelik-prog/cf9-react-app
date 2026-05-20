// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
// import CounterWithCustomHook from "./components/LessonFive/CounterWithCustomHook.tsx";
// import {useEffect} from "react";
// import NameChangerWithTitle from "./components/LessonFive/NameChangerWithTitle.tsx";
// import AutoRedirect from "./components/LessonSix/AutoRedirect.tsx";
// import AutoRedirectAdvanced from "./components/LessonSix/AutoRedirectAdvanced.tsx";
// import WindowSize from "./components/LessonSix/WindowSize.tsx";
// import FocusInput from "./components/LessonSix/FocusInput.tsx";
import PreviousValue from "./components/LessonSix/PreviousValue.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";
// import ClassCounter from "./components/LessonFour/ClassCounter.tsx";

// type PropsA = {
//     title: string,
//     description: string,
// }
//
// type PropsB = {
//     title: string,
//     description: string,
// }
//
// // UNION
// type Status = "Error" | "Info" | "Warning";
//
// // Tuples
// type Coordinates = [number, number];
//
// // Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// // INTERSECTION
// type Props = PropsA & PropsB;
//
// interface  PropsTwo {
//     title: string,
//     description: string,
// }
//
// interface PropsTwo {
//     price: number,
//     sort: number,
// }
// // PropsTwo = {title, description, price, sort}
//
// interface PropsThree extends PropsTwo {
//     image: string,
// }
// // PropsThree = {title, description, price, sort, image}

// function setup() {
//     alert("count")
// }
//
// useEffect(setup)

function App() {

    // useEffect(() => {
    //     alert("Hello World!");
    // }
    // );

  return (
    <>
        {/*LESSON TWO*/}
        {/*{<FunctionalComponent/>}*/}
        {/*{<FunctionalComponent/>}*/}
        {/*{<FunctionalComponent/>}*/}
        {/*{<FunctionalComponent/>}*/}
        {/*<ClassComponent />*/}
        {/*<ArrowFunctionalComponent />*/}

        {/*LESSON THREE*/}
        {/*<ArrowFunctionalComponentWithProps title = "Heading 1"/>*/}
        {/*<ArrowFunctionalComponentWithProps*/}
        {/*    title = "SecondTitle"*/}
        {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis delectus iure laudantium maxime nam quidem repellendus. Accusamus animi deserunt illo neque nisi perferendis sint vel. Asperiores doloribus magnam minima!"*/}
        {/*/>*/}
        {/*<Layout addClasses="bg-gray-100">*/}
            {/*<ArrowFunctionalComponentWithProps*/}
            {/*    title = "SecondTitle"*/}
            {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis delectus iure laudantium maxime nam quidem repellendus. Accusamus animi deserunt illo neque nisi perferendis sint vel. Asperiores doloribus magnam minima!"*/}
            {/*/>*/}
        {/*</Layout>*/}

        {/* LESSON FOUR */}
        {/*<Layout addClasses="bg-gray-50">*/}
        {/*    /!*<Counter/>*!/*/}
        {/*    /!*<ClassCounter/>*!/*/}
        {/*    <CounterAdvanced/>*/}
        {/*</Layout>*/}

        {/* LESSON FIVE */}
        {/*<Layout addClasses="bg-gray-50">*/}
        {/*    /!*<NameChanger/>*!/*/}
        {/*    /!*<CounterWithCustomHook/>*!/*/}
        {/*    <NameChangerWithTitle/>*/}
        {/*</Layout>*/}

        {/* LESSON SIX */}
        <Layout addClasses="bg-gray-50">
            {/*<AutoRedirect/>*/}
            {/*<AutoRedirectAdvanced/>*/}
            {/*<WindowSize/>*/}
            {/*<FocusInput />*/}
            <PreviousValue />
        </Layout>
    </>
  )
}

export default App
