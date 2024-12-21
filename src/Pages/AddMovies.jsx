import React, { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../Context API/AuthProvider';
import Swal from 'sweetalert2';

const AddMovies = () => {
  const { user, setMovies } = useContext(AuthContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [rating, setRating] = useState(1); 

  const genreOptions = [
    { value: 'comedy', label: 'Comedy' },
    { value: 'drama', label: 'Drama' },
    { value: 'horror', label: 'Horror' },
    { value: 'action', label: 'Action' },
    { value: 'romance', label: 'Romance' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'sci-fi', label: 'Sci-fi' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'animation', label: 'Animation' },
    { value: 'crime', label: 'Crime' },
  ];


  const handleRating = (rate) => {
    setRating(rate); 
    setValue('rating', rate); 
  };

  const onSubmit = (data) => {
    const movieData = {
      ...data,
      email: user?.email || 'anonymous',
      rating,
    };

    fetch('https://cine-hive-server.vercel.app/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.insertedId) {
          setMovies((prevMovies) => [...prevMovies, { ...movieData, _id: responseData.insertedId }]);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Movie has been added',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Failed to add the movie',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Something went wrong. Try again later.',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-8 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-center">Add a Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
        {/* Movie Poster URL */}
        <input
          type="text"
          placeholder="Movie Poster URL"
          {...register('poster', {
            required: 'Poster URL is required',
            pattern: {
              value: /^https?:\/\/.+\..+/,
              message: 'Invalid URL',
            },
          })}
          className="input input-bordered w-full"
        />
        {errors.poster && <p className="text-red-500">{errors.poster.message}</p>}

        {/* Movie Title */}
        <input
          type="text"
          placeholder="Movie Title"
          {...register('title', {
            required: 'Title is required',
            minLength: { value: 2, message: 'Title must be at least 2 characters' },
          })}
          className="input input-bordered w-full"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        {/* Genre Multi-select */}
        <Controller
          control={control}
          name="genre"
          rules={{ required: 'At least one genre is required' }}
          render={({ field }) => (
            <Select
              {...field}
              isMulti
              options={genreOptions}
              className="basic-multi-select"
              placeholder="Select Genres"
              onChange={(selectedOptions) => {
                field.onChange(selectedOptions.map((genre) => genre.value));
              }}
              value={genreOptions.filter((option) => field.value?.includes(option.value))}
            />
          )}
        />
        {errors.genre && <p className="text-red-500">{errors.genre.message}</p>}

        {/* Duration */}
        <input
          type="number"
          placeholder="Duration (minutes)"
          {...register('duration', {
            required: 'Duration is required',
            min: { value: 60, message: 'Duration must be at least 60 minutes' },
          })}
          className="input input-bordered w-full"
        />
        {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}

        {/* Release Year */}
        <select
          {...register('releaseYear', { required: 'Release year is required' })}
          className="select select-bordered w-full"
        >
          <option value="">Select Release Year</option>
          {Array.from({ length: 2024 - 1950 + 1 }, (_, index) => 2024 - index).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {errors.releaseYear && <p className="text-red-500">{errors.releaseYear.message}</p>}

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Rating
            onClick={handleRating}
            initialValue={rating}
            allowFraction={false} 
            size={30}
          />
          <span className="text-lg font-bold">{rating} / 5 stars</span>
        </div>

        {/* Movie Summary */}
        <textarea
          placeholder="Summary"
          {...register('summary', {
            required: 'Summary is required',
            minLength: { value: 10, message: 'Summary must be at least 10 characters' },
          })}
          className="textarea textarea-bordered w-full"
        ></textarea>
        {errors.summary && <p className="text-red-500">{errors.summary.message}</p>}

        <button type="submit" className="btn bg-black text-white hover:bg-gray-700">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
