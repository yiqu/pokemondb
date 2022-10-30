import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, doc, onSnapshot, DocumentReference, docSnapshots, collectionSnapshots,
  CollectionReference, DocumentData, FieldPath, collectionData, QueryDocumentSnapshot,
  DocumentSnapshot, collection, setDoc, addDoc, documentId , getDoc, updateDoc
} from '@angular/fire/firestore';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { FirebaseDocObsAndId } from '../models/general.model';
import { getBlob, UploadTask, percentage, uploadBytes, getDownloadURL, getStorage,
  provideStorage, FirebaseStorage, Storage } from '@angular/fire/storage';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private firestore: Firestore, private storage: AngularFireStorage) {
  }

  createDocument<T>(data: T, url: string): Promise<void> {
    const dataDoc = doc(this.firestore, 'pokemondb/' + url);
    return setDoc(dataDoc, data as any);
  }

  updateDocument(data: any): Promise<void> {
    if (data) {
      const dataDocRef: DocumentReference<DocumentData> = doc(this.firestore, 'pokemondb/');
      const dataDoc = updateDoc(dataDocRef, data);
      return dataDoc;
    }
    return Promise.resolve();
  }

  addDocumentToCollection<T>(data: T, url: string): FirebaseDocObsAndId {
    const dataDoc = doc(collection(this.firestore, 'pokemondb/' + url));
    const id: string = dataDoc.id;
    const datawithId = {
      ...data,
      id: id
    }
    return {
      operationObs: setDoc(dataDoc, datawithId),
      id: id
    };
  }

  getDocument<T>(url: string): Observable<T> {
    const dataDoc = doc(this.firestore, 'pokemondb/' + url);
    return docSnapshots(dataDoc).pipe(
      take(1),
      map((res: DocumentSnapshot<DocumentData>) => {
        return res.data() as T;
      }),
      catchError((err) => {
        console.error(err);
        return throwError(() => {
          const error: any = new Error(err);
          error.timestamp = Date.now();
          return error;
        });
      })
    );
  }

  getDataByCollectionName(name: string): Observable<any> {
    const collectionByName: CollectionReference<DocumentData> = collection(this.firestore, 'pokemondb/');
    return collectionSnapshots(collectionByName).pipe(
      take(1),
      catchError((err) => {
        console.error(err);
        return throwError(() => {
          const error: any = new Error(err);
          error.timestamp = Date.now();
          return error;
        });
      }),
      map((queryDocs: QueryDocumentSnapshot<DocumentData>[]) => {
        return queryDocs.map((queryDoc: QueryDocumentSnapshot<DocumentData>) => {
          const data = queryDoc.data() as any;
          const id = queryDoc.id;
          return {
            id,
            ...data
          };
        })
      })
    );
  }

  getCollection<T>(url: string): Observable<T[]> {
    const collectionByName: CollectionReference<DocumentData> = collection(this.firestore, 'pokemondb/' + url);
    return collectionSnapshots(collectionByName).pipe(
      take(1),
      catchError((err) => {
        console.error(err);
        return throwError(() => {
          const error: any = new Error(err);
          error.timestamp = Date.now();
          return error;
        });
      }),
      map((queryDocs: QueryDocumentSnapshot<DocumentData>[]) => {
        return queryDocs.map((queryDoc: QueryDocumentSnapshot<DocumentData>) => {
          const data = queryDoc.data() as T;
          const id = queryDoc.id;
          return {
            //id,
            ...data
          };
        })
      })
    );
  }


}
