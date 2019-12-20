<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('REVISR_WORK_TREE', '/var/www/html/'); // Added by Revisr
define('REVISR_GIT_PATH', '/usr/bin/git'); // Added by Revisr
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'wordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'nN2TucSL' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Yq1#DM)$&KC#Fn&;PwtG[z/  n].|P-v^ Ees}[Lwo:MvsXFwnh]6?^d-5np$Y;/' );
define( 'SECURE_AUTH_KEY',   '1ng-vdF}$!Rt4io1i,sneVW}MVr=[$)O`_h|}bC^+m&.$T}}h;6W5o:K+8rd$;u.' );
define( 'LOGGED_IN_KEY',     '6~K2AO_9Vi]>A?!vZUU@2)pUHLG6T4J<|ZwHsqc-d2FY_D<YXp1-:uha=vl@%$[z' );
define( 'NONCE_KEY',         '9N%.foZz1L3*DZ8DDzh>pC% 5xj8rPaRH 2<&S@H*>4>G%:qu^@8?5fu|u eKtys' );
define( 'AUTH_SALT',         'Z590j-K$uqCj*rA5%i&lfxGpe[W<O~[+<2+7em5|<wp&bM<q&S9,B+l9z)ZM E78' );
define( 'SECURE_AUTH_SALT',  '{SvpEZ-#Y)^*}?A363JOq;Vm43-:%=fg`HSLi%Iz4X/F)m~*qsI9&2?:K^d_uLe}' );
define( 'LOGGED_IN_SALT',    'u0oYrL2)*T!87OnG<6;K}1T@&RoN2rTPws7DRnClC;S>_Ax*>.)SLUI]?JuEr1 0' );
define( 'NONCE_SALT',        '=Vh-$j>`2Zi%vI?f:09nsREV@&3^Akz?$j5YG*4r~}:P[@?ZM7kpFH/{@&q  xSC' );
define( 'WP_CACHE_KEY_SALT', ':Dyj:kMt>F3veSDH&EYo>SCrxqAF+y/hisFoNn(c^%];i*#yEvvwGTF] {zWC7:4' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
