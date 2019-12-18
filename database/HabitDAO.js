import * as SQLite from 'expo-sqlite';
import Utils from '../common/Utils';

const databaseName = 'Local2019';
const tableName = 'habits';
const db = SQLite.openDatabase(databaseName, '1');

export default {
  createTable,
  get,
  insert,
  remove,
  truncate,
}

function createTable() {
  db.transaction(tx => {
    tx.executeSql(
      `create table ${tableName} (id text not null, name text, startDate text, duration text, type text, color text, createdAt text);`
    );
  }, (error) => { console.warn(error) }, (success) => { console.warn(success) });
}

function get(callback) {
  db.transaction(tx => {
    tx.executeSql(`SELECT * FROM ${tableName}`, [], (tx, results) => {
      callback(results.rows);
    });
  }, (error) => { console.warn(error) }, (success) => { console.warn(success) });
}

function insert(id = Utils.gid().toString(), name, startDate, duration, type, color, callback) {
  db.transaction(tx => {
    tx.executeSql(`insert into ${tableName} (id, name, startDate, duration, type, color) values (?, ?, ?, ?, ?, ?)`, [
      id,
      name,
      startDate,
      duration,
      type,
      color,
    ]);
    callback(true);
  }, (error) => { console.warn(error) }, (success) => { console.warn(success) });
}

function remove(id, callback) {
  db.transaction(tx => {
    tx.executeSql(`delete from ${tableName} where id = ?;`, [id]);
    callback(true);
  }, (error) => { console.warn(error) }, (success) => { console.warn(success) });
}

function truncate() {
  db.transaction(tx => {
    tx.executeSql(`delete from ${tableName}`);
  }, (error) => { console.warn(error) }, (success) => { console.warn(success) });
}
