server {
    # Listen to port 8081 on both IPv4 and IPv6.
    listen 8081 ssl default_server reuseport;
    listen [::]:8081 ssl default_server reuseport;

    # Domain names this server should respond to.
    server_name _;

    # Load the certificate files.
    ssl_certificate         /etc/letsencrypt/live/test-name/fullchain.pem;
    ssl_certificate_key     /etc/letsencrypt/live/test-name/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/test-name/chain.pem;

    # Load the Diffie-Hellman parameter.
    ssl_dhparam /etc/letsencrypt/dhparams/dhparam.pem;

    return 200 'Let\'s Encrypt certificate successfully installed!';
    add_header Content-Type text/plain;
}