import { Button, ButtonProps } from '@chakra-ui/button';
import { testResultsVar } from 'src/cache';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { ChallengeFragment } from 'src/types/generalTypes';

export const isCodeChallenge = (challenge: ChallengeFragment | undefined): challenge is CodeChallengeDataFragment => challenge?.__typename === 'CodeChallenge';

// export const useMultipleChoice = () => {
//   const [optionSelectionMap, setOptionSelectionMap] = useState([]);
//   const [hasJustAttempted, setHasJustAttempted] = useState(false);

//   const toggleOption = (index: number) => {
//     optionSelectionMap[index] = !!optionSelectionMap[index];
//     setOptionSelectionMap(optionSelectionMap);
//   };

//   const onSubmit = (onSuccess: () => void) => {
//     if ()
//   };

//   return {
//     optionSelectionMap,
//     toggleOption,
//   };
// };
