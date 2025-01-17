import { useAppSelector } from "@/store/hooks";

interface SearchArrayType {
    groupName: string;
    id: Number;
}


const ArrayToSearchMapper = (array: string[]) => {
    return array.map((item) => {
        return { groupName: item.split("###")[0], id: Number(item.split("###")[1]) };
    });
}

const searchToArrayMapper = (array: SearchArrayType[]) => {
    return array.map((item) => {
        return item.groupName + "###" + item.id;
    });
}

const mapArrayToLevels = (array: any[][]) => {
    return array.reduce((acc: Record<string,string[]>, group, index) => {
      const levelKey : string= `LEVEL_${index + 1}`;
      
      acc[levelKey] = group.map(item => {
        const parts = [item.groupName, item.id];
        return parts.join('###');
      });
  
      return acc;
    }, {});
  };

const areArraysEqual = (arr1: any[], arr2: any[]) => {

    if (arr1.length !== arr2.length) return false;

    if(typeof arr1[0] === 'string' && typeof arr2[0] === 'string'){
        const sortedArr1 = [...arr1].sort();
        const sortedArr2 = [...arr2].sort();

        return sortedArr1.every((item, index) => item === sortedArr2[index]);
    }

    // Sort arrays by the `id` property.
    const sortedArr1 = [...arr1].sort((a, b) => a.id - b.id);
    const sortedArr2 = [...arr2].sort((a, b) => a.id - b.id);

    // Deep compare each object.
    return sortedArr1.every((obj, index) => JSON.stringify(obj) === JSON.stringify(sortedArr2[index]));
}

const ReduxToPayloadConfigMapper = () => {
    const state = useAppSelector(state => state.configQA);
    const { general, rebuttal } = state;
    const { title, description, type, QAType, ManualQAAuditor, AISuggestResponse, AutoQAReviewer, isRebuttal } = general;
    const { autoAccept, rebuttalLevel } = rebuttal;
    const payload = {
        type: "QA_CONFIG",
        title: title,
        enabled: true,
        criterionId: 0,
        rebuttal: {
            autoAcceptScore: autoAccept,
            levelAndEmployees: mapArrayToLevels(Object.values(rebuttalLevel))
        },
        description: description,
        qaType: QAType,
        rebuttalEnabled: isRebuttal,
        sourceType: [type],
        aiSuggestResponse: AISuggestResponse,
        autoQaReviewer: searchToArrayMapper(AutoQAReviewer),
        manualQaAuditor: searchToArrayMapper(ManualQAAuditor),
        default: false
    }
    return payload;
}
// const ReduxToPayloadCriterionMapper = () => {
//     const state = useAppSelector(state => state.configQA);
//     const { general, parameterDetailsList, rebuttal } = state;
// 
// }


export { ArrayToSearchMapper, searchToArrayMapper, areArraysEqual ,mapArrayToLevels, ReduxToPayloadConfigMapper}