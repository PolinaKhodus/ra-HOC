import DateTime from './DateTime';
import DateTimePretty from './DateTimePretty';

export default function Video(props) {
  const FormattedDate = DateTimePretty(DateTime);

  return (
    <div className="video">
      <iframe src={props.url}
      	title={props.url} 
      	frameBorder="0" 
      	allow="autoplay; encrypted-media" 
      	allowFullScreen></iframe>
      <FormattedDate date={props.date} />
    </div>
  )
}
