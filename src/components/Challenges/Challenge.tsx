import { useEffect } from 'react';
import { ChallengeFragment } from 'src/types/generalTypes';
import { CodeChallenge } from 'components/Challenges/CodeChallenge/CodeChallenge';
import { MultipleChoiceChallenge } from 'components/Challenges/MultipleChoiceChallenge/MultipleChoiceChallenge';

export type ChallengeProps = {
  challenge: ChallengeFragment;
  nextButtonText: string;
  onClickNext: () => void;
};

export const Challenge = ({
  challenge,
  nextButtonText,
  onClickNext,
}: ChallengeProps) => {
  if (challenge.__typename === 'CodeChallenge') {
    return (
      <CodeChallenge
        challenge={challenge}
        nextButtonText={nextButtonText}
        onClickNext={onClickNext}
      />
    );
  } else if (challenge.__typename === 'MultipleChoiceChallenge') {
    return (
      <MultipleChoiceChallenge
        challenge={challenge}
        nextButtonText={nextButtonText}
        onClickNext={onClickNext}
      />
    );
  } else {
    throw new Error('Other types not built yet');
  }
};
