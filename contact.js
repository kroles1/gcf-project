function clicked(event) {
    if (!confirm('Thank you for subscribing to our Newsletter')) {
        event.preventDefault();
    }
}
