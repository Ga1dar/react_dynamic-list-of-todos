import React from 'react';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { Loader } from '../Loader';

type Props = {
  isOpen: boolean;
  todo: Todo | null;
  user: User | null;
  loading: boolean;
  onClose: () => void;
};

export const TodoModal: React.FC<Props> = ({
  isOpen,
  todo,
  user,
  loading,
  onClose,
}) => {
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`} data-cy="modal">
      <div className="modal-background" onClick={onClose} />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{todo?.title ?? 'Details'}</p>

          <button
            data-cy="closeButton"
            type="button"
            className="delete"
            aria-label="close"
            onClick={onClose}
          />
        </header>

        <div className="modal-card-body" style={{ position: 'relative' }}>
          {loading && <Loader />}

          {!loading && user && (
            <>
              <p className="block" data-cy="modal-title">
                {todo?.title}
              </p>

              <p className="block" data-cy="modal-user">
                {todo?.completed ? (
                  <strong className="has-text-success">Done</strong>
                ) : (
                  <strong className="has-text-danger">Planned</strong>
                )}
                {' by '}
                <a href={`mailto:${user.email}`}>{user.name}</a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
