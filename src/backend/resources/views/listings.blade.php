@extends('layout')

@section('content')

    <h1> {{ $heading }} </h1>
    @unless(count($listings) == 0)
        @foreach ($listings as $listing)
            <h2>
                <a href="/api/listings/{{ $listing['id'] }}">
                    {{ $listing['title'] }}
                </a>
            </h2>
            <p>{{ $listing['description'] }}</p>
        @endforeach
    @else
        <p>No Listings Found!</p>
    @endunless

@endsection
