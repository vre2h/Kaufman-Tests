import React from "react";
import Stager, { Stage } from "react-native-stager";
import { ScrollView } from "react-native-gesture-handler";
import { When, If, Then, Else } from "react-if";
import CTItemView from "./CTItemView";
import PRItemView from "./PRItemView";

const TestsStager = ({ tests, handleChosenItem, testValue }) => {
  return (
    <ScrollView>
      <When condition={!!tests.length}>
        <Stager>
          {Array.from(tests).map(({ id, images }) => (
            <Stage continue={() => true} key={id}>
              {({ context }) => (
                <If condition={testValue === "ct"}>
                  <Then>
                    <CTItemView
                      context={context}
                      itemId={id}
                      images={images}
                      handleChosenItem={handleChosenItem}
                      testLength={tests.length && tests.length}
                    />
                  </Then>
                  <Else>
                    <PRItemView
                      context={context}
                      id={id}
                      images={images}
                      handleChosenItem={handleChosenItem}
                      testsLength={tests.length && tests.length}
                    />
                  </Else>
                </If>
              )}
            </Stage>
          ))}
        </Stager>
      </When>
    </ScrollView>
  );
};

export default TestsStager;
