"""Add is_verified field to user table

Revision ID: 5b5befff79f7
Revises: fdf8821871d7
Create Date: 2022-12-27 15:28:57.260629

"""
from alembic import op
import sqlalchemy as sa


revision = '5b5befff79f7'
down_revision = 'fdf8821871d7'
branch_labels = None
depends_on = None

def upgrade():
  op.add_column('users', sa.Column('is_verified', sa.Boolean, server_default=sa.false()))

def downgrade():
  op.drop_column('users', 'is_verified')