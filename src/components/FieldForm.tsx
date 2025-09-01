import FieldCalendarTime from './FieldCalendarTime';
import FieldPhoto from './FieldPhoto';
import FieldText from './FieldText';
import Button from './ui/Button';
import FieldSlider from './ui/FieldSlider';
import Title from './ui/Title';

import useFormContext from './../hooks/useFormContext';

const TIMES = ['12:00', '14:00', '16:30', '18:30', '20:00'];

function FieldForm() {
  const { values, errors, setField, setFocused, validateAll, canSubmit } =
    useFormContext();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    console.log('SEND', values);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <Title title="Personal info" />

      <FieldText
        id="firstName"
        label="First Name"
        type="text"
        value={values.firstName}
        onChange={(v) => setField('firstName', v)}
        onFocus={() => setFocused('firstName', true)}
        onBlur={() => setFocused('firstName', false)}
        error={errors.firstName ?? ''}
      />

      <FieldText
        id="lastName"
        label="Last Name"
        type="text"
        value={values.lastName}
        onChange={(v) => setField('lastName', v)}
        onFocus={() => setFocused('lastName', true)}
        onBlur={() => setFocused('lastName', false)}
        error={errors.lastName ?? ''}
      />

      <FieldText
        id="email"
        label="Email Address"
        type="email"
        value={values.email}
        onChange={(v) => setField('email', v)}
        onFocus={() => setFocused('email', true)}
        onBlur={() => setFocused('email', false)}
        error={errors.email ?? ''}
      />

      <FieldSlider
        id="age"
        label="Age"
        min={8}
        max={100}
        step={1}
        value={values.age}
        onChange={(n) => setField('age', n)}
      />

      <FieldPhoto
        id="photo"
        label="Photo"
        value={values.photo}
        onChange={(file) => setField('photo', file)}
        error={errors.photo ?? ''}
      />

      <Title title="Your workout" />

      <FieldCalendarTime
        defaultDate={values.date}
        defaultTime={values.time}
        times={TIMES}
        onChange={({ date, time }) => {
          setField('date', date);
          setField('time', time);
        }}
      />

      <Button type="submit" inactive={!canSubmit} className="mt-4">
        Send Application
      </Button>
    </form>
  );
}

export default FieldForm;
