{{ Form::model($post, array('route' => array('admin.posts.update', $post->id), 'method' => 'PUT')) }}

<p>
	{{ Form::label('title') }}
	{{ Form::text('title') }}
</p>

<p>
	{{ Form::label('body') }}
	{{ Form::textarea('body') }}
</p>

{{ Form::submit() }}
{{ HTML::linkRoute('admin.posts.index', 'cancel') }}

{{ Form::close() }}