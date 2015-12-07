import test from 'ava';
import nm from './';

test(t => {
	t.true(nm.test('node_modules'));
	t.true(nm.test('node_modules/foo/bar.js'));
	t.true(nm.test('node_modules\\foo\\bar.js'));
	t.true(nm.test('./node_modules'));
	t.true(nm.test('.\\node_modules'));
	t.true(nm.test('/foo/bar/node_modules/blah.js'));
	t.true(nm.test('\\foo\\bar\\node_modules\\blah.js'));
	t.true(nm.test('node_modules/foo/bar.js'));
	t.true(nm.test('foo/node_modulesa/bar/node_modules/foo'));
	t.false(nm.test('foo/node_modulesa/bar/node_modulesb/foo'));
	t.false(nm.test('anode_modules'));
	t.false(nm.test('node_modulesb'));
	t.false(nm.test('node_modules.js'));
});
