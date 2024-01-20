import React from 'react';

function millisecondsToDays(milliseconds) {
  const millisecondsInOneDay = 86400000; // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  const days = milliseconds / millisecondsInOneDay;
  return days;
}

function MillisecondsToDaysConverter({ milliseconds }) {
  const days = millisecondsToDays(milliseconds);

  return (
    <div>
      <p>{milliseconds} milliseconds is approximately {days} days.</p>
    </div>
  );
}

export default MillisecondsToDaysConverter;