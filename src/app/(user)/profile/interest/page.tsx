import AppWrapper from "@/components/AppWrapper";
import Heading from "@/components/Heading";
import InterestInput from "@/features/user/components/component/component/InterestInput";

export default function EditInterest() {
  return (
    <AppWrapper>
      <Heading
        subHeading="Tell everyone about yourself"
        heading="What interest you?"
      />
      <InterestInput />
    </AppWrapper>
  );
}
