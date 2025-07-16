

export default function Bookmarks() {


  const bookmarks = ['YouTube', 'Reddit', 'Discord', 'Spotify']

  return (
    <div className="flex flex-col mt-2">
      <ul className="flex flex-col gap-2 justify-center items-center">
        {bookmarks.map((item, index) => (
          <li 
          className="flex bg-red-600 p-1 text-sm rounded-md w-full justify-center"
          key={index}>
            {item}</li>
        ))}
      </ul>

      
    </div>
  );
}