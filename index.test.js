const fs = require('fs');
const { join } = require('path');
const { copy } = require('./index');

describe('copy files', () => {
  beforeEach(done => {
    fs.writeFile(join(__dirname, 'file-to-copy.txt'), 'i am text', err => {
      done(err);
    });
  });
  

  afterEach(done => {
    fs.unlink(join(__dirname, 'file-to-copy.txt'), done);
  });

  afterEach(done => {
    fs.unlink(join(__dirname, 'file-to-copy-copy.txt'), done);
  });

  it('copies file', done => {
    const src = join(__dirname, 'file-to-copy.txt');
    const dest = join(__dirname, 'file-to-copy-copy.txt');

    copy(src, dest, err => {
      expect(err).toBeFalsy();
      fs.readFile(dest, { encoding: 'utf8' }, (err, data) => {
        expect(data).toEqual('i am text');
        done(err);
      });
    });
  });

});


describe('i have files', () => {
  it('has a hi file', done => {
    fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
      expect(data).toEqual('hello world');
      done();
    });
  });
});
