import { useReactiveVar } from '@apollo/client';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { codeEditorValueVar, testResultsVar } from 'src/cache';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { ChallengeButton } from 'components/Challenges/Challenge.utils';
import {
  hasPassedCodeChallenge,
  useCodeChallengeTests,
} from 'components/Challenges/CodeChallenge/CodeChallenge.utils';
import TestCaseResult from 'components/TestCaseResult/TestCaseResult';

export type CodeChallengeProps = {
  challenge: CodeChallengeDataFragment;
  onClickNext: () => void;
};

export const CodeChallenge = ({
  challenge: { tests, prompt, startingCode },
  onClickNext,
}: CodeChallengeProps) => {
  const { runTests, testResults } = useCodeChallengeTests(tests);
  const resetCode = () => {
    codeEditorValueVar(startingCode);
    testResultsVar([]);
  };
  const testResultsValue = useReactiveVar(testResultsVar);

  const canProceed = hasPassedCodeChallenge(tests, testResultsValue);

  return (
    <>
      <Box mt="15px" />
      <Text>{prompt}</Text>
      {tests?.map(({ label }, index) => (
        <TestCaseResult
          passed={testResults[index]?.pass}
          label={label}
          key={label}
        />
      ))}
      <Flex spacing={6} mt="auto">
        {canProceed ? (
          <ChallengeButton colorScheme="green" onClick={onClickNext} mr="20px">
            Next
          </ChallengeButton>
        ) : (
          <ChallengeButton colorScheme="green" onClick={runTests} mr="20px">
            Run Tests
          </ChallengeButton>
        )}

        <ChallengeButton colorScheme="red" onClick={resetCode}>
          {/* make this button less prominent */}
          Reset
        </ChallengeButton>
      </Flex>
    </>
  );
};
