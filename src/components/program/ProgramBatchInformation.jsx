import { ProgramSection } from './ProgramSection';

export default function ProgramBatchInformation({ program }) {
  const batch = program.batchInformation;
  const fields = [
    ['Programme', batch.programme],
    ['Start Date', batch.startDate],
    ['Mode', batch.mode],
    ['Session', batch.session],
    ['Timings', batch.timings],
  ];

  return (
    <ProgramSection id="batch-information" eyebrow="Batch Information" title={`${program.title} Batch Information`}>
      <dl className="rrc-card rrc-program-batch rrc-program-batch__grid">
        {fields.map(([label, value]) => <div className="rrc-program-batch__item" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </ProgramSection>
  );
}
