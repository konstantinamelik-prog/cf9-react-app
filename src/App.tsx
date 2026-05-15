// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";
import Counter from "./components/Lesson Four/Counter.tsx";

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

function App() {

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
        <Layout addClasses="bg-gray-50">
            <Counter/>
        </Layout>

    </>
  )
}

export default App
