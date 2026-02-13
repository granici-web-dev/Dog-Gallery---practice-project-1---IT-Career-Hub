# Create an app that loads and displays random photos of dogs.

Create a DogGallery component.
Use useState to store:
An array of photo URLs.
The loading state (isLoading).
Use useEffect for the initial load.
Use axios for requests to the Dog API.

API for requests: https://dog.ceo/api/breeds/image/random

On first launch — 3 random dogs are loaded
The “Add Dog” button — adds +1 new photo to the array
The “Refresh All” button — completely replaces all photos with new ones
While photos are loading — display the text "Loading... ."

Performance criteria
When the page opens, 3 dogs are visible.
When you click “Add dog,” a 4th appears, then a 5th, and so on.
When you click “Refresh all,” all photos are replaced with new ones.
While photos are loading, “Loading...” is displayed.
Errors are handled via try/catch.
The loading indicator for each button is a separate state for adding and updating.
Clear all — a button that deletes all photos.
Number of dogs — display a counter: “Dogs loaded: X.”

Translated with DeepL.com (free version)